import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ activityData, activityType }) => {
    const linkUrl = activityType === 'Проект' ? '/projects/' : "/events/"
    return (
        <div className="activity-card">
            <Link className="activity-card__name" to={linkUrl + String(activityData.id)}>
                {activityData.name}
                <span className="activity-card__type"> {activityType}</span>
            </Link>
            <p className="activity-card__description"> {activityData.short_description}</p>
            {activityType === 'Проект' ? <></> :
                <span className="activity-card__date"> {activityData.start_date + " - " + activityData.end_date} </span>
            }
        </div>
    )
}

export default ActivityCard