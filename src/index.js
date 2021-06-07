import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}
                 addPost = { addPost }
                 updateNewPostText = {updateNewPostText}
                 addMessage = {addMessage}

            />
        </BrowserRouter>,document.getElementById('root'));
}



rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();