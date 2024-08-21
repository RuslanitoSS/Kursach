import star from './assets/star.svg';

export default function Require() {
    return (
        <>
            <h2 className="require__main-text">Требования к проекту</h2>
            <ul className="require__require-list">
                <li className="require__require-list--require-item">
                    <img src={star} alt="" className="require__require-item--star" />
                    <span className="require__require-item--star-text">актуальность</span>                    
                </li>
                <li className="require__require-list--require-item">
                    <img src={star} alt="" className="require__require-item--star" />
                    <span className="require__require-item--star-text require__wrap-text">доступное<br />содержание</span>
                </li>
                <li className="require__require-list--require-item">
                    <img src={star} alt="" className="require__require-item--star" />
                    <span className="require__require-item--star-text">оригинальность</span>
                </li>
            </ul>
            <button className="require__require-button">Выложить проект</button>
        </>
    );
}