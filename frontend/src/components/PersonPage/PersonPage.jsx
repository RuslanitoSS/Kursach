import React, { useState, useEffect } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ActivityCard from "./ActivityCard/ActivityCard";
import placeholderImgGreen from '../PersonCard/placeholderGreen.svg'
import { useParams } from "react-router-dom";


const PersonPage = () => {
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    const { userId } = useParams()

    async function getData() {
        const url = "http://127.0.0.1:8000/api/users/" + String(userId);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Код ошибки: ${response.status}`);
            }

            const json = await response.json();

            setUserData(json);

        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData()

    }, [])

    const { first_name, last_name, middle_name, user_type, university_name, workplace, projects, events, organization } = userData
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
                                    <h1 className="left__name">{last_name + " " + first_name + " " + middle_name} </h1>
                                    <p className="left__type"> {user_type === "student" ? "Студент" : "Сотрудник"} </p>
                                    <p className="left__workplace"> {university_name !== null ? university_name : workplace} </p>
                                </>
                            }
                        </div>
                        <div className="person-page__right">

                            {isLoading ? <div>Загрузка...</div> :
                                <>
                                    <h2 className="right__activities">Участия</h2>
                                    <ul className="right__activities-list">
                                        {projects.isEmpty ? <></> :
                                            projects.map(project =>
                                                <li key={project.id}>
                                                    <ActivityCard
                                                        activityData={project}
                                                        activityType={"project"}
                                                    />
                                                </li>

                                            )
                                        }
                                        {events.isEmpty ? <></> :
                                            events.map(event =>
                                                <ActivityCard
                                                    activityData={event}
                                                    activityType={"event"}
                                                />
                                            )
                                        }
                                    </ul>
                                    {organization.isEmpty ? <> </> :
                                        <>
                                            <h2 className="right__activities">Организовывал(а)</h2>
                                            <div className="right__activities-list">
                                                {organization.projects.isEmpty ? <></> :
                                                    organization.projects.map(project =>
                                                        <ActivityCard
                                                            activityData={project}
                                                            activityType={"project"}
                                                        />
                                                    )
                                                }
                                                {organization.events.isEmpty ? <></> :
                                                    organization.events.map(event =>
                                                        <ActivityCard
                                                            activityData={event}
                                                            activityType={"event"}
                                                        />
                                                    )
                                                }
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