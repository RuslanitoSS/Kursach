import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProjectRoute.scss";
import TextareaAutosize from "react-textarea-autosize";
import { useAuth } from "../../context/AuthProvider";

const CreateProjectRoute = () => {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [participants, setParticipants] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSetOrganizers = (organizersStr) => {
    const newOrganizers = organizersStr
      .split(",")
      .map((id) => id.trim())
      .filter((id) => !isNaN(Number(id)) && Number(id) > 0 && !participants.includes(id));

    if (!newOrganizers.includes(String(currentUser.id))) {
      newOrganizers.push(String(currentUser.id));
    }

    setOrganizers(newOrganizers);
  };

  const handleSetParticipants = (participantsStr) => {
    const newParticipants = participantsStr
      .split(",")
      .map((id) => id.trim())
      .filter((id) => !isNaN(Number(id)) && Number(id) > 0 && !organizers.includes(id));


    setParticipants(newParticipants);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const projectData = {
      name: name,
      description: description,
      short_description: shortDescription,
      participants: participants,
      organizers: organizers,
    };

    console.log(projectData)

    fetch("http://127.0.0.1:8000/api/projects/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setSuccessMessage("Проект успешно создан!");
          navigate(`/projects/${data.id}`);
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);
        setErrorMessage("Произошла ошибка при создании проекта.");
      });
  };

  return (
    <div className="wrapper">
      <div className="search create">
        <h2 className="create-heading">Создание нового проекта</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <form onSubmit={handleSubmit} className="create-form">
          <fieldset>
            <div>
              <label htmlFor="name">Название проекта:</label>
              <input
                type="text"
                id="name"
                placeholder='"Мне скучно"'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Описание:</label>
              <TextareaAutosize
                id="description"
                placeholder="Расскажите шутку"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="shortDescription">Краткое описание: </label>
              <input
                type="text"
                id="shortDescription"
                placeholder="Только покороче"
                onChange={(e) => setShortDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="participants">
                Участники: <span>(ID через запятую) </span>
              </label>
              <input
                type="text"
                id="participants"
                placeholder="ID через запятую"
                onBlur={(e) => handleSetParticipants(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="organizers">
                Организаторы: <span>(Вы уже включены) </span>
              </label>
              <input
                type="text"
                id="organizers"
                placeholder={"ID через запятую"}
                onBlur={(e) => handleSetOrganizers(e.target.value)}
              />
            </div>
          </fieldset>
          <button type="submit" className="create-form__submit">
            Создать проект
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectRoute;
