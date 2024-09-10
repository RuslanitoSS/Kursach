import React from "react";
import NavMenu from "./components/menu/NavMenu";
import Login from "./components/login/Login";
import logoSrc from './лого.svg'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="wrapper header">
            <div className="header__left-side">
                <Link to="/">
                <img src={logoSrc} />
                </Link>
            </div>
            <div className="header__nav-button">
                <NavMenu />
                <Login />
            </div>
        </div>
    )
}

export default Header