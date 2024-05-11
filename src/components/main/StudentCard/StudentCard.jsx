

const StudentCard = (student) => {
    
    return (
        <div className="students__card">
            <h3 className='card__heading'>{student.student.heading}</h3>
            <div className="card-inner">
                <div className="card-inner-left">
                    <p className='card-inner-left__text'>
                        {student.student.description}
                    </p>
                    <a href={student.student.profileUrl} className="card-inner-left__link">
                        Перейти в профиль студента...
                    </a>
                </div>
                <img src={student.student.imgUrl} alt="" className='card-inner__img' />
            </div>
        </div>
    )
}

export default StudentCard; 