import React from "react";
import logoSrc from './icon.png'
const Footer = () => {
    return (
        <div class="container py-3">
            <div class="text-center">
                <img src={logoSrc} width={130} height={70}/>
            </div>
            <div class="row mt-4">
                <div class="col-2">
                    <p class="p-header">О нас</p>
                    <ul>
                        <li>О платформе</li>
                        <li>Возможности</li>
                        <li>Последние проекты</li>
                        <li>Достижения</li>
                        <li>Взаимодейтсвие</li>
                        <li>Присоединиться</li>
                    </ul>
                </div>
                <div class="col-2">
                    <p class="p-header">Проекты</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Мероприятия</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Студенты</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Контакты</p>
                    <ul>
                        <li>
                            <a href="tel:+79152210591</li>" className="footer__nav-link">+7 (915) 221 05-91</a>
                        </li>
                        <li><a href="/" className="footer__nav-link">123@123.com</a></li>
                        <li><a href="/" className="footer__nav-link">Telegram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    
    )
}

export default Footer
