import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {

        let message = newMessage.current.value;
        props.addMessage(message);

    }

    return (
        <div  className={s.dialogs} >
                <div className={s.dialogsItems} >
                    {dialogsElements}
                </div>
                <div className={s.messages} >{messagesElements}
                    <textarea ref={newMessage} />
                    <button onClick={addMessage} >add</button>

                </div>

        </div>

    )
}
//addMessage = {props.addMessage}
export default Dialogs;