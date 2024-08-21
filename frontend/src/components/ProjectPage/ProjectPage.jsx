import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import placeholderImg from '../StudentsPage/StudentCard/placeholder.svg'

export default function ProjectPage() {
    const testProjectData = {
        "id": 1,
        "name": "Project Example",
        "description": "This is a sample project description. It can be a long text.",
        "short_description": "Sample project",
        "address": "123 Main St, Anytown, USA",
        "start_date": "2022-01-01",
        "end_date": "2022-12-31",
        profileImage: placeholderImg,
    }

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
                                <img className="left__img" src={testProjectData.profileImage} alt="" />
                            </div>
                            <h1 className="left__name">{testProjectData.name}</h1>
                            <p className="left__type"> Проект </p>
                            <p className="left__workplace"> {testProjectData.short_description} </p>
                        </div>
                        <div className="person-page__right">
                            <h2 className="right__activities">Описание</h2>
                            <p className='right__desc'>{testProjectData.description} </p>
                            <div className="right__members">
                                <h2 className="members-heading">Участники</h2>
                                <div className='members-list__organizers'>
                                    <div className="organizers-list">
                                        {/* test.map() */}
                                    </div>
                                    <span className='organizers-span'>Организаторы</span>
                                </div>
                                <div className='members-list__members'>
                                    <div className="members-list">
                                    {/* test.map() */}
                                    </div>
                                    <span className='members-span'>Участники</span>
                                </div>
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
