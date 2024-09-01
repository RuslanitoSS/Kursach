import { NavLink } from "react-router-dom";
import placeholderImg from './PlaceHolderActivityImgGreen.svg'

const ActivityCard = ({ props, type }) => {
    const { id, name, short_description, start_date, end_date, organizers } = props
    return (
        <div className="project-card">
            <div className="project-card__left">
                <img src={placeholderImg} alt="" className="left__photo" />
            </div>

            <div className="project-card__main">
                <div>
                    <NavLink className={"main__name"} to={`/${type}s/${id}`}>
                        {name}
                    </NavLink>
                    {start_date ? <span className={"main__date"}>{start_date + " - " + end_date}</span> : <></>}
                    <p className="main__description"> {short_description}</p>
                    <ul className="main__organizers">
                        {organizers.map(organizer => (
                            <li className="organizers__organizer" key={organizer.id}>
                                <NavLink className={"organizer__name"} to={`/users/${organizer.id}`}>
                                    {organizer.last_name + " " + organizer.first_name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="right__button">Участвовать</button>
            </div>
        </div>
    )
}

export default ActivityCard