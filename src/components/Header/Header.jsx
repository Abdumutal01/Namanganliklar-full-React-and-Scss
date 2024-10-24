import React from 'react'
import Container from '../../Container'
import './Header.scss';
import headerLogoImg from '../../assets/img/headerLogoImg.png';
import headerMoneyImg from '../../assets/img/headerMoneyImg.png';
import header_rusFlag from '../../assets/img/header_rusFlag.png';
import headerReklamaImg from '../../assets/img/header__reaklama.png';
import Header__list from './Header__Lists/Header__list';
import Nav from '../Nav/Nav';

function Header() {
    return (
        <header className='header'>
            <Container>
                <nav className='header__nav'>
                    <ul className="header__list">
                        <img src={headerLogoImg} alt="Logo" className='header__logoImg' />
                        <img src={headerMoneyImg} alt="Money" className="header__moneyImg" />
                    </ul>
                    <ul className="header__list">
                        <button className='header__btn'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className='header__btn'>
                            <img src={header_rusFlag} className='header__rusFlag' />
                            РУ
                        </button>
                        <button className='header__tgmBtn'>
                            <i class="fa-brands fa-telegram"></i>
                            Подписатся
                        </button>
                    </ul>
                </nav>
                <Nav />
                <Header__list />
                <div className='header__imgBox'>
                    <img src={headerReklamaImg} alt="" className='header__reaklamaImg' />
                </div>
            </Container>
        </header>
    )
}

export default Header;
