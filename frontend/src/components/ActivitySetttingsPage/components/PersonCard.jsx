import React from 'react'
import './PersonCard.scss'
import PlaceholderPersonImg from '../../PersonCard/placeholderGreen.svg'

export default function PersonCard({personData}) {
    const {id, first_name, last_name } = personData
  return (
    <div className='activity-page__person-card'>
        <img src={PlaceholderPersonImg} alt="" className='person-card__img'/>
    </div>
  )
}
