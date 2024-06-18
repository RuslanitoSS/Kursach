import { NavLink } from "react-router-dom";
import  placeholderImg  from './placeholder.svg'

const StudentCard = () => {
    return (
        <div className="project-card">
            <div className="project-card__left">
            <img src={placeholderImg} alt="" className="left__photo"/>
            </div>
    
            <div className="project-card__main">
                <div>
                <NavLink className={"main__name"} to="/events/1">
                    PolyWeb
                </NavLink>
                <p className="main__place"></p>
                <p className="main__description"> Студенческая веб-студия</p>
                <ul className="main__organizers">
                    <li className="organizers__organizer">
                        <NavLink className={"organizer__name"} to="/staff/1">
                        Екатерина Шукалова
                        </NavLink>
                    </li>
                    <li className="organizers__organizer">
                        <NavLink className={"organizer__name"} to="/staff/2">
                            И ко.
                        </NavLink>
                    </li>
                </ul>
                </div>
                <button className="right__button">Участвовать</button>
            </div>
        </div>
    )
}

export default StudentCard