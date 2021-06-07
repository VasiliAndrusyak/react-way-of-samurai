import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg'/>
            {props.id} {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;