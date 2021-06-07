import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    return (
         <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path = '/profile'
                           render = { () => <Profile
                               profilePage = {props.state.profilePage}
                               dispatch = {props.dispatch}  /> }/>
                    <Route path = '/dialogs'
                           render = { () => <Dialogs
                               state = {props.state.dialogsPage}
                               addMessage = {props.addMessage}
                               //addNewMessage = {props.addNewMessage}
                               // message = {props.state.dialogsPage.messages.message}
                           /> }/>
                    <Route path = '/news'
                           render = { () => <Dialogs state = {props.state.dialogsPage} /> }/>
                    <Route path = '/music'
                           render = { () => <Dialogs state = {props.state.dialogsPage} /> }/>
                    <Route path = '/settings'
                           render = { () => <Dialogs state = {props.state.dialogsPage} /> }/>
                    <Route path = '/friends'
                           render = { () => <Dialogs state = {props.state.dialogsPage} /> }/>
                </div>
            </div>
         </BrowserRouter>
     )
}

export default App;