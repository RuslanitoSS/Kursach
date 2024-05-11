import About from "./about/About"
import FirstScreen from "./firstScreen/FirstScreen"
import Projects from "./Projects/Prokects"
import Students from "./Students/Students"
import Interaction from "./interaction/Interaction"
import News from "./news/news"
import Require from "./require/require"

const Main = () => {
    return (
        <>
            <section>
                <div className="wrapper main">
                    <FirstScreen />
                </div>
            </section>

            <section>
                <div className="wrapper main">
                    <About />
                </div>
            </section>

            <section className="section-projects">
                <div className="wrapper main">
                    <Projects />
                </div>
            </section>
            <section>
                <div className="wrapper main">
                    <Students/>
                </div>
            </section>
            <section>
                <div className="wrapper main">
                    <Interaction/>
                </div>
            </section>
            <section className="section-news">
                <div className="wrapper main">
                    <News/>
                </div>
            </section>
            <section className="section-require">
                <div className="wrapper main">
                    <Require/>
                </div>
            </section>
        </>
    )

}

export default Main