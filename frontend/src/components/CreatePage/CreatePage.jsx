import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import HeaderBottom from '../HeaderBottom/HeaderBottom'

export default function CreatePage() {
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
                        to="/employees"
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
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
