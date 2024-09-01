import { Link } from "react-router-dom";
import placeholderImg from './placeholderGreen.svg'
import { useState } from "react";

const PersonCard = ({ props, type }) => {
    const { id, first_name, middle_name, last_name, university_name, workplace } = props;


    return (

        <div className="student-card">
            <Link className="student-card__left" to={`/users/${id}`}>
                <img src={placeholderImg} alt="" className="left__photo" />
            </Link>

            <div className="student-card__main">
                <Link className={"main__name"} to={`/users/${id}`}>
                    {last_name + ' ' + first_name + ' ' + middle_name}
                </Link>
                <p className="main__workplace"> {type === 'student' ? 'Студент' : 'Сотрудник'} {university_name !== null ? university_name : ''}  {workplace !== null ? '"' + workplace + '"' : ''}</p>
                {/* <ul className="main__achievements">
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
                </ul> */}
            </div>
        </div>
    )
}

export default PersonCard