import React, {useState, useEffect} from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PersonCard from '../PersonCard/PersonCard'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import { NavLink } from "react-router-dom";


const EmployeePage = () => {

    const [employees, setEmployees] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

    async function getData() {
        const url = "http://127.0.0.1:8000/api/employees/";
        
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Код ошибки: ${response.status}`);
          }
      
          const json = await response.json();
          
          setEmployees(json); 

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
                        className={(isActive) => isActive ? "nav__el active" : "nav__el" }
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
                        <div className="search__result">
                        {isLoading ? <div className="loadingText"> loading... </div> : 
                            employees.map(employee => (
                                <li className="search__result__item" key={employee.id}>
                                    <PersonCard props={employee} type={'employee'}/>
                                </li>
                            ))
                            }
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

export default EmployeePage