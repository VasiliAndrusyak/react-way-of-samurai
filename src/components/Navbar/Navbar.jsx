import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  to ="/profile" activeClassName = {s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to ="/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/settings">Settings</NavLink>
            </div>
            <p></p>
            <div className={s.item}>
                <NavLink to ="/friends">Friends</NavLink>
                <div className = {s.selector}></div>
                <div className = {s.selector}></div>
                <div className = {s.selector}></div>

            </div>
        </nav>
    )
}

export default Navbar;