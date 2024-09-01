import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import PlaceHolderActivityImg from './PlaceHolderActivityImgGreen.svg'
import { useParams, NavLink, Link } from 'react-router-dom'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import ActivityEditForm from './components/ActivityEditForm/ActivityEditForm'

export default function ActivitySetttingsPage({ type }) {
    const [isLoading, setIsLoading] = useState(true)
    const [profileData, setProfileData] = useState({})
    const { activityId } = useParams()

    async function getData() {
        const url = `http://127.0.0.1:8000/api/${type}s/${activityId}/`;

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

    const { name, description, short_description, start_date, end_date, address, participants, organizers } = profileData

    return (
        <>
            <header>
                <Header />
                <HeaderBottom>
                    <NavLink
                        className={"nav__el"}
                        to={`/${type}s/${activityId}`}
                        end
                    >
                        Обзор
                    </NavLink>
                    <NavLink
                        className={"nav__el"}
                        to={`/${type}s/${activityId}/settings/`}
                    >
                        Редактировать
                    </NavLink>
                </HeaderBottom>
            </header>
            <main>
                <div className="wrapper">
                    <div className="person-page">
                        <div className="person-page__left">
                            <div className="left__photo">
                                <img className="left__img" src={PlaceHolderActivityImg} alt="" />
                            </div>
                            {isLoading ? <div> Загрузка...</div> :
                                <>
                                    <h1 className="left__name">{name}</h1>
                                    <p className="left__type"> {type === 'project' ? 'Проект' : 'Эвент'} </p>
                                    <p className="left__workplace"> {short_description} </p>
                                </>
                            }
                        </div>
                        <div className="person-page__right">
                            {isLoading ? <div>Загрузка...</div> :
                                <>
                                <ActivityEditForm 
                                props={profileData}
                                activityType={type}
                                />
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
