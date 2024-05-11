import React from "react";
import logoSrc from './icon.png'
const Footer = () => {
    return (
        <footer>
        <div class="container py-3">
            <div class="text-center">
                <img src={logoSrc} width={130} height={70}/>
            </div>
            <div class="row mt-4">
                <div class="col-2">
                    <p class="p-header">Главная</p>
                    <ul>
                        <li>О платформе</li>
                        <li>Возможности</li>
                        <li>Последние проекты</li>
                        <li>Достижения</li>
                        <li>Взаимодейтсвие</li>
                        <li>Новости</li>
                        <li>Присоединиться</li>
                    </ul>
                </div>
                <div class="col-2">
                    <p class="p-header">О нас</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Проекты</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Новости</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Студенты</p>
                </div>
                <div class="col-2">
                    <p class="p-header">Работадатели</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
