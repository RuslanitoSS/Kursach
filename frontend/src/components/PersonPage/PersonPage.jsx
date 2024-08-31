import React, { useState, useEffect } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ActivityCard from "./ActivityCard/ActivityCard";
import placeholderImgGreen from '../StudentsPage/StudentCard/placeholderGreen.svg'
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

    async function testGetData() {

        const testActivities = [
            {
                id: 1,
                name: 'Polyweb',
                short_description: 'Студенеская веб студия',
                start_date: '30.08.2024',
                end_date: '30.08.2024',
            },
            {
                id: 1,
                name: 'Polyweb',
                short_description: 'Студенеская веб студия',
                start_date: '30.08.2024',
                end_date: '30.08.2024',
            },
            {
                id: 1,
                name: 'Polyweb',
                short_description: 'Студенеская веб студия',
                start_date: '30.08.2024',
                end_date: '30.08.2024',
            },
        ]
        const json = {
            first_name: 'Руслан',
            last_name: 'Супроткин',
            university: "Политех",
            projects: testActivities,
            events: testActivities,
            organizations: testActivities,
        }

        setProfileData(json)
        setIsLoading(false);
    }

    useEffect(() => {
        /* getData() */
        testGetData()

    }, [])

    const { first_name, last_name, middle_name, university, projects, events, organizations } = profileData

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
                                <img className="left__img" src={placeholderImgGreen} alt="" />
                            </div>
                            {isLoading ? <div> Загрузка...</div> :
                                <>
                                    <h1 className="left__name">{last_name + " " + first_name} </h1>
                                    <p className="left__type"> {type == "student" ? "Студент" : "Сотрудник"} </p>
                                    <p className="left__workplace"> {university} </p>
                                </>
                            }
                        </div>
                        <div className="person-page__right">

                            {isLoading ? <div>Загрузка...</div> :
                                <>
                                    <h2 className="right__activities">Участия</h2>
                                    <div className="right__activities-list">
                                        {projects.isEmpty ? <></> :
                                            projects.map(activity =>
                                                <ActivityCard
                                                    activityData={activity}
                                                    activityType={"Проект"}
                                                />
                                            )
                                        }
                                        {events.isEmpty ? <></> :
                                            events.map(activity =>
                                                <ActivityCard
                                                    activityData={activity}
                                                    activityType={"Эвент"}
                                                />
                                            )
                                        }
                                    </div>
                                    {organizations.isEmpty ? <> </> :
                                        <>
                                            <h2 className="right__activities">Организовывал(а)</h2>
                                            <div className="right__activities-list">
                                                {organizations.map(activity =>
                                                    <ActivityCard
                                                        activityData={activity}
                                                        activityType={"Проект"}
                                                    />
                                                )}
                                            </div>
                                        </>
                                    }

                                </>
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