import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import PlaceHolderActivityImg from './PlaceHolderActivityImgGreen.svg'
import PlaceholderPersonImg from '../StudentsPage/StudentCard/placeholderGreen.svg'
import { Link, useParams } from 'react-router-dom'
import PersonCard from './components/PersonCard'

export default function ActivityPage({type}) {
    const [isLoading, setIsLoading] = useState(true)
    const [profileData, setProfileData] = useState({})
    const { projectId } = useParams()

    async function getData() {
        const url = 'http://localhost:8000/api/projects/' + String(projectId);

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

        const testMembers = [
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },

        ]
        const testOrganizers = [
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },
            {
                id: 1,
                first_name: 'Руслан',
                last_name: 'Супроткин',
                profileImg: PlaceholderPersonImg,
            },

        ]

        const json = {
            "name": "PolyWeb",
            "description": `PolyWeb — это уникальная студенческая веб-студия, созданная в нашем университете для объединения талантливых студентов, увлеченных веб-разработкой, дизайном и цифровыми технологиями. Мы предоставляем платформу для студентов, где они могут развивать свои профессиональные навыки, работая над реальными проектами под руководством опытных наставников из числа преподавателей и приглашенных экспертов.
            Цели PolyWeb:
            Практическое обучение: Мы предоставляем студентам возможность применять теоретические знания на практике, создавая сайты и веб-приложения для реальных заказчиков.
            Портфолио и карьерные возможности: Студенты могут создать портфолио с успешными проектами, что значительно повысит их шансы на трудоустройство после окончания вуза.
            Командная работа и коллаборация: Участие в студии помогает студентам развивать навыки командной работы, общения и управления проектами.
            Инновации и творчество: PolyWeb — это пространство для инноваций, где студенты могут экспериментировать с новыми технологиями и подходами в веб-разработке.
            Что мы предлагаем:`,
            short_description: "Студенческая веб-студия",
            "start_date": "2022-01-01",
            members: testMembers,
            organizers: testOrganizers,
        }


        setProfileData(json)
        setIsLoading(false);
    }

    useEffect(() => {
        /* getData() */
        testGetData()

    }, [])

    const { name, description, short_description, start_date, members, organizers } = profileData

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
                                    <h2 className="right__activities">Описание</h2>
                                    <p className='right__desc'>{description} </p>
                                    <div className="right__members">
                                        <h2 className="members-heading">Участники</h2>
                                        <div className="people-list">
                                            <div className='people-list__organizers'>
                                                <div className="organizers-list">
                                                    {organizers.map(orgnizer =>
                                                        <Link to={`/students/${orgnizer.id}`}>
                                                            <PersonCard
                                                                personData={orgnizer}
                                                            />
                                                        </Link>
                                                    )
                                                    }
                                                </div>
                                                <span className='organizers-span'>Организаторы</span>
                                            </div>
                                            <div className='people-list__members'>
                                                <div className="members-list">
                                                    {members.isEmpty ? <></> :
                                                        members.map(member =>
                                                            <Link to={`/students/${member.id}`}>
                                                                <PersonCard
                                                                    personData={member}
                                                                />
                                                            </Link> 
                                                        )
                                                    }
                                                </div>
                                                <span className='members-span'>Участники</span>
                                            </div>

                                        </div>
                                    </div>
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
