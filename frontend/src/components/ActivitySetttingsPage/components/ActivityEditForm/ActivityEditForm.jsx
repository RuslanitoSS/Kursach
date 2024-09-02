import React, { useState } from 'react';
import './ActivityEditForm.scss'
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteProjectButton from '../DeleteProjectButton/DeleteProjectButton'
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



    /* organizers */
    const removeOrganizerById = (organizerId) => {
        setActivityOrganizers((prevOrganizers) =>
            prevOrganizers.filter((organizer) => organizer.id !== organizerId)
        );
    };
    const addOrganizers = (e) => {
        e.preventDefault()
        let organizerIds = organizersInputData
        const idsArray = organizerIds.split(',').map((id) => id.trim())
        const filteredIds = idsArray.filter((id) => !isNaN(Number(id)) && Number(id) > 0);
        setActivityOrganizers((prevOrganizers) => [...prevOrganizers, ...filteredIds])
    };

    /* participants */
    const removeParticipantById = (participantId) => {
        setActivityParticipants((prevParticipants) =>
            prevParticipants.filter((participant) => participant.id !== participantId)
        );
    };
    const addParticipants = (e) => {
        console.log(e)
        e.preventDefault()
        let participantsIds = participantsInputData
        const idsArray = participantsIds.split(',').map((id) => id.trim())
        const filteredIds = idsArray.filter((id) => !isNaN(Number(id)) && Number(id) > 0);
        setActivityParticipants((prevParticipant) => [...prevParticipant, ...filteredIds])
    };





    const [deleteClickCount, setDeleteClickCount] = useState(0);

    const handleDeleteClick = () => {
        if (deleteClickCount === 0) {
            setDeleteClickCount(1);
        } else if (deleteClickCount === 1) {
            setDeleteClickCount(2);
        } else if (deleteClickCount === 2) {
            deleteProjectAPI();
        }
    };

    const getButtonText = () => {
        if (deleteClickCount === 0) {
            return 'Удалить проект';
        } else if (deleteClickCount === 1) {
            return 'Вы уверены?';
        } else if (deleteClickCount === 2) {
            return 'Точно уверены??';
        }
        return 'Удалить';
    };

    const deleteProjectAPI = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/projects/1/delete/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {

                setTimeout(() => {
                    navigate(`/${activityType}s/`);
                }, 1000);

            } else {
                throw new Error('Ошибка при удалении проекта.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
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
                                pattern='[0-9]+(,[0-9]+)*'
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
                                pattern='[0-9]+(,[0-9]+)*'
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
            <button onClick={handleDeleteClick} className='right__edit-form__delete'>
                {getButtonText()}
            </button>
        </>
    );
};

export default ActivityEditForm;