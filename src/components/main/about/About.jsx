import png from './assets/star.png'
import Arrow from '../../assets/Arrow'

const About = () => {
    return (
        <div className="about">
            <div className="about__left">
                <h3 className="about_hwo">
                    Студенту
                </h3>
                <p className="left">
                Doodle представляет собой уникальное онлайн-пространство, где студенты могут выставлять свои работы, 
                получать обратную связь от других участников и расширять свой круг профессиональных контактов. 
                Создавайте свое уникальное пространство и дайте своему таланту возможность блеснуть!
                </p>
                <div className="about__line about__line-1">

                </div>
                <Arrow className={'about__arrow-1'} />
            </div>

            <div className="about__student">
                <div>
                    <img src={png} alt="" />
                    <p>продвижение ваших проектов</p>
                </div>
                <div>
                    <img src={png} alt="" />
                    <p>множество едномышленников</p>
                </div>
                <div>
                    <img src={png} alt="" />
                    <p>большие возможности развития своих навыков</p>
                </div>
            </div>

            <div className="about__right"> 
                <h3 className="about_hwo">
                    Работадателю
                </h3>
                <p className="right">
                    В Doodle вы можете найти исполнителей с уникальными навыками и портфолио. 
                    Платформа предоставляет возможность ознакомиться с работами студентов, оценить их творческий потенциал, 
                    связаться с ними для обсуждения возможного сотрудничества и найти именно тех специалистов, 
                    которые помогут привнести инновационные идеи в ваш бизнес.
                </p>
                <div className="about__line about__line-2">

                </div>
                <Arrow className={'about__arrow-2'} />
            </div>

            <div className="about__student">
                <div>
                    <img src={png} alt="" />
                    <p>продвижение ваших проектов</p>
                </div>
                <div>
                    <img src={png} alt="" />
                    <p>множество едномышленников</p>
                </div>
                <div>
                    <img src={png} alt="" />
                    <p>большие возможности развития своих навыков</p>
                </div>
            </div>
        </div>
    )
}

export default About