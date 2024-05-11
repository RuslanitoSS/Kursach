import arrowRight from './assets/arrow-right.svg';
import arrowLeft from './assets/arrow-left.svg';
import { useState } from 'react';

const Slider = ({ children: slides }) => {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    return (
        <div className="slider">
            <button className='slider__btn' onClick={prev}> <img src={arrowLeft} alt="" /> </button>
            <div className="slider__inside" style={{ transform: `translateX( -${current * 100}%)` }}> {slides}</div>
            <button className='slider__btn' onClick={next}> <img src={arrowRight} alt="" /></button>
        </div>
    )
}

export default Slider