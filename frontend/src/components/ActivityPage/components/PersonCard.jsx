import React from 'react'
import './PersonCard.scss'

export default function PersonCard({personData}) {
    const {id, first_name, last_name, profileImg} = personData
  return (
    <div className='activity-page__person-card'>
        <img src={profileImg} alt="" className='person-card__img'/>
    </div>
  )
}
