import { NavLink } from "react-router-dom";
import  placeholderImg  from './placeholder.svg'

const StudentCard = () => {
    return (
        <div className="student-card">
            <div className="student-card__left">
            <img src={placeholderImg} alt="" className="left__photo"/>
            </div>
    
            <div className="student-card__main">
                <NavLink className={"main__name"} to="/students/1">
                    Супроткин Руслан Васильевич
                </NavLink>
                <p className="main__workplace"> Студент, Московский Политех, Факультут Информациооных технологий, 1 курс</p>
                <ul className="main__achievements">
                    <li className="achievements__achievement">
                        <NavLink className={"achievement__name"} to="/projects/1">
                            PolyWeb
                        </NavLink>
                    </li>
                    <li className="achievements__achievement">
                        <NavLink className={"achievement__name"} to="/events/1">
                            Встреча от Сбербанка
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StudentCard