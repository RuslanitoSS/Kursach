import { NavLink } from "react-router-dom";
import placeholderImg from './placeholder.svg'
import { useEffect, useState } from "react";
import AxiosInstance from '../../Axios/Axios'

const StudentCard = (props) => {
    
    const { event_id, name, short_description, address, start_date, end_date } = props

    const [organizers, setOrganizers] = useState([])
    const [emploeeName, setEmploeeName] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    return (
        <div className="event-card">
            <div className="event-card__left">
                <img src={placeholderImg} alt="" className="left__photo" />
            </div>

            <div className="event-card__main">
                <div>
                    <NavLink className={"main__name"} to={`/events/${event_id}`}>
                        {name}
                    </NavLink>
                    <p className="main__place"> {address} </p>
                    <ul className="main__organizers">
                        Тест Тестович
                    </ul>
                </div>
                <button className="right__button">Участвовать</button>
            </div>
        </div>
    )
}

export default StudentCard