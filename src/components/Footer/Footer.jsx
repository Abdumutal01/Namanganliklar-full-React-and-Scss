import React from 'react'
import './Footer.scss'
import Container from '../../Container'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className="footer__hero">
                    <h1 className='footer__logo'>NAMANGANLIKLAR24</h1>
                    <div className='footer__btnBox' >
                        <h2 className='footer__title'>
                            Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:
                        </h2>
                        <button className='footer__btn'>
                            <i class="fa-brands fa-telegram"></i>
                            Подписатся
                        </button>
                    </div>
                </div>
                <hr className='footer__line' />
                <ul className='footer__list'>
                    <li className='footer__item'>
                        О сайте <br /> <br />
                        Воспроизводство, копирование, тиражирование,<br />
                        распространение и иное использование <br />
                        информации с сайта «NAMANGANLIKLAR24.UZ» <br />
                        возможно только с предварительного письменного <br />
                        разрешения редакции.

                    </li>
                    <li className='footer__item'>
                        Информация о сайте <br /><br />
                        Напишите нам         <br /><br />
                        Реклама         <br /><br />
                        Прислать новость
                    </li>
                    <li className='footer__item'>
                        Использование материалов    <br /><br />
                        Темы дня         <br /><br />
                        Наша команда

                    </li>
                </ul>
            </Container>
        </footer>
    )
}
