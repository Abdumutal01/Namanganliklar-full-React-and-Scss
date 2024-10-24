import React from 'react'
import './HomeList.scss'

export default function HomeList() {
  return (
    <ul className='home__list'>
      <li className='home__item'>
        <span>
          <i class="fa-regular fa-bell"></i>
        </span>
        Хотите узнать новости первыми? подключите уведомления!
      </li>
      <li>
        <button className='home__btn'>
          Включит  уведомления!
        </button>
      </li>
    </ul>
  )
}
