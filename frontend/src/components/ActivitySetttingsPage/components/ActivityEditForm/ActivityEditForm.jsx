import React, { useState } from 'react';
import './ActivityEditForm.scss'
import TextareaAutosize from 'react-textarea-autosize';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ActivityCard from '../../../ActivityCard/ActivityCard';
import PersonCard from '../../../ActivityPage/components/PersonCard';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const ActivityEditForm = ({ props, activityType }) => {
    const { name, description, short_description, start_date, end_date, address, participants, organizers } = props;
    const { activityId } = useParams()
    const [error, setError] = useState('');
    const [activityParticipants, setActivityParticipants] = useState(participants);
    const [activityOrganizers, setActivityOrganizers] = useState(organizers);
    const [successMessage, setSuccessMessage] = useState('')
    const [participantsInputData, setParticipantsInputData] = useState('')
    const [organizersInputData, setOrganizersInputData] = useState('')
    const navigate = useNavigate()

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



    /* organizers */
    const removeOrganizerById = (organizerId) => {
        setActivityOrganizers((prevOrganizers) =>
            prevOrganizers.filter((organizer) => organizer.id !== organizerId)
        );
    };
    const addOrganizers = (e) => {
        e.preventDefault()
        let organizerIds = organizersInputData
        setActivityOrganizers((prevOrganizers) => [...prevOrganizers, organizerIds.split(',').map((id) => id.trim())])
    };



    /* participants */
    const removeParticipantById = (participantId) => {
        setActivityParticipants((prevParticipants) =>
            prevParticipants.filter((participant) => participant.id !== participantId)
        );
    };
    const addParticipants = (e) => {
        e.preventDefault()
        let participantsIds = participantsInputData
        setActivityParticipants((prevParticipant) => [...prevParticipant, participantsIds.split(',').map((id) => id.trim())])
    };

    const handleDescriptionChange = (e) => {
        setActivity(prevActivity => ({
            ...prevActivity,
            description: e.target.value
        }));
    }




    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivity(prevActivity => ({
            ...prevActivity,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(activity)

        fetch(`http://127.0.0.1:8000/api/${activityType}s/${activityId}/update/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activity)
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    setSuccessMessage('Проект успешно обновлен!');
                    setTimeout(() => {
                        navigate(`/${activityType}s/${activityId}/`);
                    }, 1000);

                } else {
                    throw new Error('Не удалось обновить проект.');
                }
            })
            .catch(err => {
                console.error('Ошибка обновления проекта:', err);
                setError(`${err}`);
            });
    };

    return (
        <>
            {error && <div className="right-error">{error}</div>}
            {successMessage && <div className="right-success">{successMessage}</div>}

            <h2 className='right__activities'>Редактировать проект</h2>
            <form onSubmit={handleSubmit} className='right__edit-form'>
                <fieldset className='right__edit-form-left'>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={activity.name}
                            onChange={handleChange}
                            className='edit-form-name'
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
                    {activityType === 'event' ? (
                        <>
                            <div className='right__edit-form-dates'>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={activity.start_date}
                                    onChange={handleChange}
                                />
                                <span className='separator'> - </span>
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
                    ) : <></>}

                    <button type="submit" className='right__edit-form__submit'>Сохранить изменения</button>
                </fieldset>
                <fieldset className='right__edit-form-right'>
                    <div className="right__edit-form-right__top">
                        <p>Организаторы</p>
                        <label htmlFor="organizers">Добавить:</label>
                        <div className='input-container'>
                            <input
                                type="text"
                                id="organizers"
                                placeholder='ID через запятую'
                                onChange={(e) => setOrganizersInputData(e.target.value)}
                            />
                            <button className="input-add-btn" onClick={(e) => addOrganizers(e)}>
                                <CheckRoundedIcon />
                            </button>
                        </div>

                        <span>Выбранные организаторы</span>
                        <div className="organizers-list">
                            {activityOrganizers.map(organizer => (
                                <button
                                    className='person-remove-button'
                                    type="button"
                                    onClick={() => removeOrganizerById(organizer.id)}>
                                    <PersonCard
                                        personData={organizer}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="right__edit-form-right__bottom">
                        <p>Участники</p>
                        <label htmlFor="participants">Добавить:</label>
                        <div className='input-container'>
                            <input
                                type="text"
                                id="participants"
                                placeholder='ID через запятую'
                                onChange={(e) => setParticipantsInputData(e.target.value)}
                            />
                            <button className="input-add-btn" onClick={(e) => addParticipants(e)}>
                                <CheckRoundedIcon />
                            </button>
                        </div>

                        <span>Выбранные участники</span>
                        <div className="participants-list">
                            {activityParticipants.map(participant => (
                                <button
                                    className='person-remove-button'
                                    type="button"
                                    onClick={() => removeParticipantById(participant.id)}>
                                    <PersonCard
                                        personData={participant}
                                    />

                                </button>
                            ))}
                        </div>
                    </div>
                </fieldset>

            </form>
        </>
    );
};

export default ActivityEditForm;