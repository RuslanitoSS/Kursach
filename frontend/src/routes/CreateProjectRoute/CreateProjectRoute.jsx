import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProjectRoute.scss'
import TextareaAutosize from 'react-textarea-autosize';

const CreateProjectRoute = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [participants, setParticipants] = useState('');
  const [organizers, setOrganizers] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Формируем данные для отправки на сервер
    const projectData = {
      name: name,
      description: description,
      short_description: shortDescription,
      participants: participants.split(',').map((id) => id.trim()), // Преобразуем строку в массив чисел
      organizers: organizers.split(',').map((id) => id.trim()),     // Преобразуем строку в массив чисел
    };

    // Отправка данных на сервер
    fetch('/api/projects/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setSuccessMessage('Проект успешно создан!');
          navigate(`/projects/${data.id}`);
        }
      })
      .catch((error) => {
        console.error('Ошибка при отправке данных:', error);
        setErrorMessage('Произошла ошибка при создании проекта.');
      });
  };


  return (
    <div className='wrapper'>
      <div className="search create">
        <h2 className='create-heading'>Создание нового проекта</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form onSubmit={handleSubmit} className='create-form'>
          <fieldset>
            <div>
              <label htmlFor="name">Название проекта:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Описание:</label>
              <TextareaAutosize
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

            </div>
            <div>
              <label htmlFor="shortDescription">Краткое описание:</label>
              <input
                type="text"
                id="shortDescription"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="participants">Участники: <span>(ID через запятую)</span></label>
              <input
                type="text"
                id="participants"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="organizers">Организаторы: <span>(ID через запятую)</span></label>
              <input
                type="text"
                id="organizers"
                value={organizers}
                onChange={(e) => setOrganizers(e.target.value)}
              />
            </div>
          </fieldset>
          <button type="submit" className='create-form__submit'>Создать проект</button>
        </form>
      </div>

    </div>
  );
};

export default CreateProjectRoute
