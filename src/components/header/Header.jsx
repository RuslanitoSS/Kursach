import SearchBar from "./components/searchbar/SearchBar";
import NavMenu from "./components/menu/NavMenu";
import Login from "./components/login/Login";
import logoSrc from './лого.svg'

import React from "react";

const Header = () => {
    return (
        <div className="wrapper header">
            <div className="header__left-side">
                <img src={logoSrc}/>
                <SearchBar/>
            </div>
            <div className="header__nav-button">
                <NavMenu/>
                <Login className="login__button" text='Вход'/>
            </div>
            
        </div>
    )
}

export default Header