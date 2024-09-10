import React, { useState } from "react";
import "./ActivityEditForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate, useParams } from "react-router-dom";
import PersonCard from "../../../ActivityPage/components/PersonCard";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useAuth } from "../../../../context/AuthProvider";

const ActivityEditForm = ({ props, activityType }) => {
  const { currentUser } = useAuth();
  const {
    name,
    description,
    short_description,
    start_date,
    end_date,
    address,
    participants,
    organizers,
  } = props;
  const { activityId } = useParams();
  const [error, setError] = useState("");
  const [activityParticipants, setActivityParticipants] = useState(
    participants.map((participant) => String(participant.id))
  );
  const [activityOrganizers, setActivityOrganizers] = useState(
    organizers.map((organizer) => String(organizer.id))
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [participantsInputData, setParticipantsInputData] = useState("");
  const [organizersInputData, setOrganizersInputData] = useState("");
  const navigate = useNavigate();

  const [activity, setActivity] = useState({
    name,
    description,
    short_description,
    start_date,
    end_date,
    address,
    participants: activityParticipants,
    organizers: activityOrganizers,
  });

  const handleDescriptionChange = (e) => {
    setActivity((prevActivity) => ({
      ...prevActivity,
      description: e.target.value,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prevActivity) => ({
      ...prevActivity,
      [name]: value,
    }));
  };

  /* organizers */
  const removeOrganizerById = (orgIdToRemove) => {
    setActivityOrganizers((prevOrganizers) =>
      prevOrganizers.filter((id) => id !== orgIdToRemove)
    );
  };

  const addOrganizers = (e) => {
    e.preventDefault();

    const newOrganizers = organizersInputData
      .split(",")
      .map((id) => id.trim())
      .filter(
        (id) =>
          !isNaN(Number(id)) &&
          Number(id) > 0 &&
          !activityOrganizers.includes(id) &&
          !activityParticipants.includes(id)
      );

    if (!activityOrganizers.includes(String(currentUser.id))) {
      newOrganizers.push(String(currentUser.id));
    }

    setActivityOrganizers((prevOrganizers) => [
      ...prevOrganizers,
      ...newOrganizers,
    ]);
  };

  /* participants */
  const removeParticipantById = (partIdToRemove) => {
    setActivityParticipants((prevParticipants) =>
      prevParticipants.filter((id) => id !== partIdToRemove)
    );
  };

  const addParticipants = (e) => {
    e.preventDefault();

    const newParticipants = participantsInputData
      .split(",")
      .map((id) => id.trim())
      .filter(
        (id) =>
          !isNaN(Number(id)) &&
          Number(id) > 0 &&
          !activityParticipants.includes(id) &&
          !activityOrganizers.includes(id)
      );

      
    setActivityParticipants((prevParticipants) => [
      ...prevParticipants,
      ...newParticipants,
    ]);

    setActivity((prevActivity) => ({
      ...prevActivity,
      participants: [activityParticipants],
    }));
  };

  const [deleteClickCount, setDeleteClickCount] = useState(0);

  const handleDeleteClick = () => {
    if (deleteClickCount === 0) {
      setDeleteClickCount(1);
    } else if (deleteClickCount === 1) {
      setDeleteClickCount(2);
    } else if (deleteClickCount === 2) {
      setDeleteClickCount(3);
      deleteProjectAPI();
    }
  };

  const getButtonText = () => {
    if (deleteClickCount === 0) {
      return "Удалить проект";
    } else if (deleteClickCount === 1) {
      return "Вы уверены?";
    } else if (deleteClickCount === 2) {
      return "Точно уверены??";
    } else if (deleteClickCount === 3) {
      return activityType === "event" ? "Событие удалено!" : "Проект удалён!";
    }
    return "Удалить";
  };

  const deleteProjectAPI = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/${activityType}s/${activityId}/delete/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setTimeout(() => {
          navigate(`/${activityType}s/`);
        }, 1000);
      } else {
        throw new Error("Ошибка при удалении проекта.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activityOrganizers.includes(String(currentUser.id))) {
      setActivityOrganizers((prevOrganizers) => [
        ...prevOrganizers,
        [String(currentUser.id)]
      ]);
    }

    const activityData = {
      name: activity.name ,
      description: activity.description ,
      short_description: activity.short_description,
      start_date:activity.name,
      end_date:activity.end_date,
      address:activity.address,
      participants: activityParticipants,
      organizers: activityOrganizers,
    }

    fetch(`http://127.0.0.1:8000/api/${activityType}s/${activityId}/update/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activityData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setSuccessMessage("Проект успешно обновлен!");
          setTimeout(() => {
            navigate(`/${activityType}s/${activityId}/`);
          }, 1000);
        } else {
          throw new Error("Не удалось обновить проект.");
        }
      })
      .catch((err) => {
        console.error("Ошибка обновления проекта:", err);
        setError(`${err}`);
      });
  };

  return (
    <>
      {error && <div className="right-error">{error}</div>}
      {successMessage && <div className="right-success">{successMessage}</div>}

      <h2 className="right__activities">Редактировать проект</h2>
      <form onSubmit={handleSubmit} className="right__edit-form">
        <fieldset className="right__edit-form-left">
          <div>
            <input
              type="text"
              name="name"
              value={activity.name}
              onChange={handleChange}
              className="edit-form-name"
              required
            />
          </div>
          <div>
            <input
              name="short_description"
              value={activity.short_description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <TextareaAutosize
              id="description"
              name='description"'
              value={activity.description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          {activityType === "event" ? (
            <>
              <div className="right__edit-form-dates">
                <input
                  type="date"
                  name="start_date"
                  value={activity.start_date}
                  onChange={handleChange}
                />
                <span className="separator"> - </span>
                <input
                  type="date"
                  name="end_date"
                  value={activity.end_date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={activity.address}
                  onChange={handleChange}
                />
              </div>
            </>
          ) : (
            <></>
          )}

          <button type="submit" className="right__edit-form__submit">
            Сохранить изменения
          </button>
        </fieldset>
        <fieldset className="right__edit-form-right">
          <div className="right__edit-form-right__top">
            <p>Организаторы</p>
            <label htmlFor="organizers">Добавить:</label>
            <div className="input-container">
              <input
                type="text"
                id="organizers"
                placeholder="ID через запятую"
                pattern="[0-9]+(,[0-9]+)*"
                onChange={(e) => setOrganizersInputData(e.target.value)}
              />
              <button
                className="input-add-btn"
                onClick={(e) => addOrganizers(e)}
              >
                <CheckRoundedIcon />
              </button>
            </div>

            <span>Выбранные организаторы</span>
            <span>
              {activityOrganizers.map((org) => (
                <>{org}, </>
              ))}
            </span>
            <div className="organizers-list">
              {activityOrganizers.map((organizerId) => (
                <button
                  className="person-remove-button"
                  type="button"
                  onClick={() => removeOrganizerById(organizerId)}
                >
                  <PersonCard personData={organizerId} />
                </button>
              ))}
            </div>
          </div>
          <div className="right__edit-form-right__bottom">
            <p>Участники</p>
            <label htmlFor="participants">Добавить:</label>
            <div className="input-container">
              <input
                type="text"
                id="participants"
                placeholder="ID через запятую"
                pattern="[0-9]+(,[0-9]+)*"
                onChange={(e) => setParticipantsInputData(e.target.value)}
              />
              <button
                className="input-add-btn"
                onClick={(e) => addParticipants(e)}
              >
                <CheckRoundedIcon />
              </button>
            </div>

            <span>Выбранные участники</span>
            <span>
              {activityParticipants.map((part) => (
                <>{part}, </>
              ))}
            </span>
            <div className="participants-list">
              {activityParticipants.map((participantId) => (
                <button
                  className="person-remove-button"
                  type="button"
                  onClick={() => removeParticipantById(participantId)}
                >
                  <PersonCard personData={participantId} />
                </button>
              ))}
            </div>
          </div>
        </fieldset>
      </form>
      <button onClick={handleDeleteClick} className="right__edit-form__delete">
        {getButtonText()}
      </button>
    </>
  );
};

export default ActivityEditForm;
