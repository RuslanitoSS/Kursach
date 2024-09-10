import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PlaceHolderActivityImg from "./PlaceHolderActivityImgGreen.svg";
import { useParams, NavLink, Link } from "react-router-dom";
import PersonCard from "./components/PersonCard";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import { useAuth } from "../../context/AuthProvider";

export default function ActivityPage({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({});
  const { activityId } = useParams();
  const { currentUser } = useAuth();

  async function getData() {
    const url = `http://127.0.0.1:8000/api/${type}s/${activityId}/`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Код ошибки: ${response.status}`);
      }

      const json = await response.json();

      setProfileData(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
     getData();
  }, []);

  const {
    name,
    description,
    short_description,
    start_date,
    participants,
    organizers,
  } = profileData;

  return (
    <>
      <header>
        <Header />
        <HeaderBottom>
          {isLoading ? (
            <div> Загрузка... </div>
          ) : (
            <>
              <NavLink className={"nav__el"} to={`/${type}s/${activityId}`}>
                Обзор
              </NavLink>
              {currentUser && organizers.some(
                (organizer) => organizer.id === currentUser.id
              ) ? (
                <NavLink
                className={"nav__el"}
                to={`/${type}s/${activityId}/settings/`}
              >
                Редактировать
              </NavLink>
                
              ) : (
<></>
              )}
            </>
          )}
        </HeaderBottom>
      </header>
      <main>
        <div className="wrapper">
          <div className="person-page">
            <div className="person-page__left">
              <div className="left__photo">
                <img
                  className="left__img"
                  src={PlaceHolderActivityImg}
                  alt=""
                />
              </div>
              {isLoading ? (
                <div> Загрузка...</div>
              ) : (
                <>
                  <h1 className="left__name">{name}</h1>
                  <p className="left__type">
                    {" "}
                    {type === "project" ? "Проект" : "Эвент"}{" "}
                  </p>
                  <p className="left__workplace"> {short_description} </p>
                </>
              )}
            </div>
            <div className="person-page__right">
              {isLoading ? (
                <div>Загрузка...</div>
              ) : (
                <>
                  <h2 className="right__activities">Описание</h2>
                  <p className="right__desc">{description} </p>
                  <div className="right__members">
                    <h2 className="members-heading">Участники</h2>
                    <div className="people-list">
                      <div className="people-list__organizers">
                        <div className="organizers-list">
                          {organizers.map((orgnizer) => (
                            <Link to={`/users/${orgnizer.id}`}>
                              <PersonCard personData={orgnizer} />
                            </Link>
                          ))}
                        </div>
                        <span className="organizers-span">Организаторы</span>
                      </div>
                      <div className="people-list__members">
                        <div className="members-list">
                          {participants.isEmpty ? (
                            <></>
                          ) : (
                            participants.map((member) => (
                              <Link to={`/users/${member.id}`}>
                                <PersonCard personData={member} />
                              </Link>
                            ))
                          )}
                        </div>
                        <span className="members-span">Участники</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
