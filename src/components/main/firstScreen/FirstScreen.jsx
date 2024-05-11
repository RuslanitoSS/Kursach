import png from './assets/star.png'
import Login from '../../header/components/login/Login'

const FirstScreen = () => {
    return (
        <div className="firstsreen">
            <p className="firstsreen__name">Doodle</p>
            <p className="firstsreen__description">
                Платформа для реализации своего творческого потенциала, поиска своей аудитории и работадалей
            </p>
            <Login className={'login__button firstsreen__button'} text={'Присоединиться'}/>
            <div className='firstsreen_img firstsreen_img-1'>
                <p>Твори</p>
                <img src={png} alt="make"/>
            </div>

            <div className='firstsreen_img firstsreen_img-2'>
                <p>Покоряй</p>
                <img src={png} alt="take"/>
            </div>

            <div className='firstsreen_img firstsreen_img-3'>
                <p>Вдохновляй</p>
                <img src={png} alt="create"/>
            </div>

        </div>
    )
}

export default FirstScreen