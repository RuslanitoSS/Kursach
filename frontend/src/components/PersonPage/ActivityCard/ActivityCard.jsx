import React from "react";
import { NavLink } from "react-router-dom";

const ActivityCard = ({ activityName, activityType, activityDescription, activityDate }) => {
    return (
        <div className="activity-card">
            <a href="/" className="activity-card__name">{activityName}
                <span className="activity-card__type"> {activityType == 'event' ? "Мероп" : "Проект"}</span>
            </a>

            <p className="activity-card__description"> {activityDescription}</p>
            <span className="activity-card__date"> {activityDate} </span>
        </div>
    )
}

export default ActivityCard