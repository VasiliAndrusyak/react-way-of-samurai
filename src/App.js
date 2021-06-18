import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from "react-router-dom";




const App = (props) => {
    return (

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
                               store = {props.store}

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

     )
}

export default App;