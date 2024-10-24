import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul className="nav__list">
                <li className='nav__item'>
                    <Link to='/' className='nav__link'>
                        Home
                    </Link>

                </li>
                <li className='nav__item'>
                    <Link to='list' className='nav__link' >
                        List
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='article' className='nav__link' >
                        Article
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='contact' className='nav__link' >
                        Contact
                    </Link>
                </li>


            </ul>
        </nav>
    )
}
