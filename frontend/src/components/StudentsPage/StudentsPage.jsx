import React from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import StudentCard from './StudentCard/StudentCard'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import { NavLink } from "react-router-dom";


const StudentsPage = () => {
    return (
        <>
            <header>
                <Header />
                <HeaderBottom>

                    <NavLink
                        className={"nav__el"}
                        to="/students"
                    >
                        Студенты
                    </NavLink>

                    <NavLink
                        className={"nav__el"}
                        to="/staff"
                    >
                        Сотрудники
                    </NavLink>


                    <NavLink
                        className={"nav__el"}
                        to="/events"
                    >
                        Мероприятия
                    </NavLink>

                    <NavLink
                        className={"nav__el"}
                        to="/projects"
                    >
                        Проекты
                    </NavLink>

                </HeaderBottom>
            </header>
            <main>
                <div className="wrapper">
                    <div className="search">
                        {/* <div className="search-area">
                            <input type="search" name="" id="" className="search-area__bar" placeholder="Поиск по студентам" />
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5754 19.624L30.7673 25.4986" stroke="#72C007" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 12.0706C2 17.6325 7.5198 22.1413 14.3288 22.1413C17.7392 22.1413 20.8263 21.0102 23.0583 19.1822C25.2826 17.3606 26.6577 14.8468 26.6577 12.0706C26.6577 6.50877 21.1378 2 14.3288 2C7.5198 2 2 6.50877 2 12.0706Z" stroke="#72C007" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> */}
                        <div className="search__result">
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default StudentsPage