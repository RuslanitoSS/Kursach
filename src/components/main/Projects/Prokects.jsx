import designImg from "./assets/design.png"
import dancingImg from "./assets/dancing.png"
import musicImg from "./assets/music.png"
import actingImg from "./assets/acting.png"
import producingImg from "./assets/producing.png"
import singingImg from "./assets/singing.png"

const Projects = () => {
    return (
        <div className="projects">
            <ul className="projects_grid">
                <li className="projects__project">
                    <img src={designImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Графический дизайн</h2>
                    </div>

                </li>
                <li className="projects__project">
                    <img src={singingImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Вокал</h2>
                    </div>

                </li>
                <li className="projects__project">
                    <img src={actingImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Актерское мастерство</h2>
                    </div>

                </li>
                <li className="projects__project">
                    <img src={musicImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Музыка</h2>
                    </div>

                </li>
                <li className="projects__project">
                    <img src={dancingImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Хореография</h2>
                    </div>

                </li>
                <li className="projects__project">
                    <img src={producingImg} alt="" className="project__img" />
                    <div className="project__text-cover">
                        <h2 className="project__text">Режиссура</h2>
                    </div>

                </li>
            </ul>
            <a href="" className="projects__other">Проекты других направлений</a>
        </div>
    )
}

export default Projects 