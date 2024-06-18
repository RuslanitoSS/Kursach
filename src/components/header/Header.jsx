import SearchBar from "./components/searchbar/SearchBar";
import NavMenu from "./components/menu/NavMenu";
import Login from "./components/login/Login";
import logoSrc from './лого.svg'
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <div className="wrapper header">
            <div className="header__left-side">
                <img src={logoSrc} />

            </div>
            <div className="header__nav-button">
                <NavMenu />

                <NavLink
                    className={"nav__el login__button"}
                    to="/login"
                >
                    Вход
                </NavLink>


            </div>

        </div>
    )
}

export default Header