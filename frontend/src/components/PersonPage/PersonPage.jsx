import React from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import ActivityCard from "./ActivityCard/ActivityCard";
import placeholderImg from '../StudentsPage/StudentCard/placeholder.svg'

const activitiesList = [{
    activityName: "PolyWeb Agency",
    activityType: "Проект",
    activityDescription: "Студенческая веб студия",
    activityDate: "07/07/2024"
}, {
    activityName: "PolyWeb Agency",
    activityType: "Проект",
    activityDescription: "Студенческая веб студия",
    activityDate: "07/07/2024"
},
{
    activityName: "PolyWeb Agency",
    activityType: "Проект",
    activityDescription: "Студенческая веб студия",
    activityDate: "07/07/2024"
},
{
    activityName: "PolyWeb Agency",
    activityType: "Проект",
    activityDescription: "Студенческая веб студия",
    activityDate: "07/07/2024"
}]

const PersonPage = ({ id, type }) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="wrapper">
                    <div className="person-page">
                        <div className="person-page__left">
                            <div className="left__photo">
                                <img className="left__img" src={placeholderImg} alt="" />
                            </div>

                            <h1 className="left__name">Супроткин Руслан </h1>
                            <p className="left__type"> {type == "student" ? "Студент" : "Сотрудник"} </p>
                            <p className="left__workplace"> Московский Политех, Факультут Информациооных технологий, 1 курс </p>
                        </div>
                        <div className="person-page__right">
                            <h2 className="right__activities">Все участия</h2>
                            <div className="right__activities-list">
                                {activitiesList.map(activity =>
                                    <ActivityCard activityName={activity.activityName}
                                        activityType={activity.activityType}
                                        activityDescription={activity.activityDescription}
                                        activityDate={activity.activityDate}
                                    />
                                )}
                            </div>
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

export default PersonPage