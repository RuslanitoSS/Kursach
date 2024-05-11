import faberjeIMG from './assets/faberje.png';
import concertIMG from './assets/concert.png';

export default function News() {
    return (
        <>
            <h2 className="news__main-text">Новости</h2>
            <ul className="news__news-list">
                <li className="news__news-list--news-item">
                    <img src={concertIMG} alt="" className="news__news-item--image" />
                    <p className="news__news-item--news-text">
                        В 89 регионах нашей страны продолжаются региональные отборочные этапы «Российская студентческая весна» Российского Союза Молодежи.
                    </p>                    
                </li>
                <li className="news__news-list--news-item">
                    <img src={faberjeIMG} alt="" className="news__news-item--image" />
                    <p className="news__news-item--news-text">
                        Музей Фаберже объявляет открытый творческий конкурс на разработку нового логотипа, который будет отражать актуальную концепцию и ценности музея
                    </p>   
                </li>
            </ul>
            <button className="news__details-button">Подробнее</button>
        </>
    );
}