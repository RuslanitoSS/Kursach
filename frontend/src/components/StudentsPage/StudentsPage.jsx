import React from "react";
import { useState, useEffect } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PersonCard from '../PersonCard/PersonCard'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import { NavLink } from "react-router-dom";


const StudentsPage = () => {

    const [students, setStudents] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

    async function getData() {
        const url = "http://localhost:8000/api/students/";
        
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Код ошибки: ${response.status}`);
          }
      
          const json = await response.json();
          
          setStudents(json); 

        } catch (error) {
          console.error(error.message);
        } finally {
            setIsLoading(false);
        }
      }
      
    useEffect(() => {
        getData()
    
    }, [])
    
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
                <div className="wrapper">
                    <div className="search">
                        {/* <div className="search-area">
                            <input type="search" name="" id="" className="search-area__bar" placeholder="Поиск по студентам" />
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5754 19.624L30.7673 25.4986" stroke="#72C007" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 12.0706C2 17.6325 7.5198 22.1413 14.3288 22.1413C17.7392 22.1413 20.8263 21.0102 23.0583 19.1822C25.2826 17.3606 26.6577 14.8468 26.6577 12.0706C26.6577 6.50877 21.1378 2 14.3288 2C7.5198 2 2 6.50877 2 12.0706Z" stroke="#72C007" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> */}
                        <ul className="search__result">
                            {isLoading ? <div className="loadingText"> loading... </div> : 
                            students.map(student => (
                                <li className="search__result__item" key={student.id}>
                                    <PersonCard props={student} type={'student'}/>
                                </li>
                            ))
                            }
                            
                        </ul>
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