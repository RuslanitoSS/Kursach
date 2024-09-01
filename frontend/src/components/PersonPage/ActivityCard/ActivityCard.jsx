import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ activityData, activityType }) => {
    const { id, name, short_description, start_date, end_date } = activityData
    return (
        <div className="activity-card">
            <Link className="activity-card__name" to={`/${activityType}s/${id}`}>
                {name}
                <span className="activity-card__type"> {activityType ==='event' ? 'Эвент' : 'Проект'}</span>
            </Link>
            <p className="activity-card__description"> {short_description}</p>
            {activityType === 'event' ?
                (<span className="activity-card__date"> {start_date + " - " + end_date} </span>)
                : <></>}
        </div>
    )
}

export default ActivityCard