import arrow from "./assets/way-arrow.svg"

const Interaction = () => {
    return (
        <div className="interaction">
            <h2 className="interaction__heading">Как происходит взаимодействие?</h2>
            <img src={arrow} alt="" />
            <ul className="interaction__text">
                <li id="step-1"><p>Зарегистрируйся на платформе</p></li>
                <li id="step-2"><p>Расскажи о себе</p></li>
                <li id="step-3"><p>Выложи свой первый проект</p></li>
                <li id="step-4"><p>Получи обратную связь </p></li>
                <li id="step-5"><p>Найди своего первого заказчика</p></li>
                <li id="step-6"><p>Продолжай развиваться и создавать новые проеты</p></li>                
            </ul>
        </div>
    )
}

export default Interaction
