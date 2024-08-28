import React, { useState, useEffect } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ActivityCard from "./ActivityCard/ActivityCard";
import placeholderImg from '../StudentsPage/StudentCard/placeholder.svg'
import { useParams } from "react-router-dom";


const PersonPage = ({ type }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [profileData, setProfileData] = useState({})
    const { studentId } = useParams()

    async function getData() {
        const url = 'http://localhost:8000/api/students/' + String(studentId);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Код ошибки: ${response.status}`);
            }

            const json = await response.json();

            setProfileData(json)


        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData()

    }, [])

    const { first_name, last_name, middle_name, university, course, projects, events } = profileData

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
                            {isLoading ? <div> Загрузка...</div> :
                                <>
                                    <h1 className="left__name">{last_name + " " + first_name} </h1>
                                    <p className="left__type"> {type == "student" ? "Студент" : "Сотрудник"} </p>
                                    <p className="left__workplace"> {university + ", " + course + ' курс'} </p>
                                </>
                            }
                        </div>
                        <div className="person-page__right">
                            <h2 className="right__activities">Все участия</h2>
                            {isLoading ? <div>Загрузка...</div> :
                                <div className="right__activities-list">
                                    {projects.map(activity =>
                                        <ActivityCard
                                            activityData={activity}
                                            activityType={"Проект"}
                                        />
                                    )}
                                    {events.map(activity =>
                                        <ActivityCard
                                            activityData={activity}
                                            activityType={"Эвент"}
                                        />
                                    )}
                                </div>
                            }
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