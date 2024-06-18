import { NavLink } from "react-router-dom";
import  placeholderImg  from './placeholder.svg'

const StudentCard = () => {
    return (
        <div className="event-card">
            <div className="event-card__left">
            <img src={placeholderImg} alt="" className="left__photo"/>
            </div>
    
            <div className="event-card__main">
                <div>
                <NavLink className={"main__name"} to="/events/1">
                    Встреча от Сбербанка
                </NavLink>
                <p className="main__place"> Московский Политех, ул. Прянишникова 2А</p>
                <ul className="main__organizers">
                    <li className="organizers__organizer">
                        <NavLink className={"organizer__name"} to="/staff/1">
                            Я Не Знаю
                        </NavLink>
                    </li>
                    <li className="organizers__organizer">
                        <NavLink className={"organizer__name"} to="/staff/2">
                            Честно
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