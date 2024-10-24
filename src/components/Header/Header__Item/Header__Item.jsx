import React from 'react'
import './Header__Item.scss'

export default function Header__Item() {
    const itemArrey = ['Узбекистана', 'Мир', 'Экономика', 'Политика', 'Общество', 'Технологии', 'Спорт', 'Культура', 'Происшествия', 'Туризм'];
    return (
        itemArrey.map((link, index) => (
            <li key={index} className='header__item'>
                <a href="#" className='header__link'>{link}</a>
            </li>
        ))
    )

}
