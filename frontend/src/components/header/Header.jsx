import NavMenu from "./components/menu/NavMenu";
import logoSrc from './лого.svg'
import profileSVG from '../PersonCard/placeholder.svg'
import { NavLink, Link } from "react-router-dom";
import React from "react";


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

                <NavLink
                    className={"nav__el login__button"}
                    to="/users/1"
                >
                    <img src={profileSVG} alt="" className="login__button__svg"/>
                </NavLink>


            </div>

        </div>
    )
}

export default Header