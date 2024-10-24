import React from 'react'
import Container from '../../../Container'
import './Contact.scss'
import contactImg1 from '../../../assets/img/contactImg1.png'
import contactImg2 from '../../../assets/img/contactImg2.png'

export default function Contact() {
  return (
    <section className='contact'>
      <Container>
        <h2>Напишите нам</h2>
        <div className="contact__general">
          <form action="#" className="contact__form">
            <input type="text" placeholder='Имя' className='contact__input' />
            <input type="email" placeholder='Электронная почта' className='contact__input' />
            <input type="tel" placeholder='Номер телефона' className='contact__input' />
            <input type="text" placeholder='Тема' className='contact__input' />
            <input type="text" placeholder='Текст' className='contact__input contact__text' />
            <input type="file" className='contact__input contact__file ' placeholder='Прикрепить файл' />
            <li className='row' style={{display:"flex", gap:"20px", alignItems:"center"}}>
              <input type="password" placeholder='Код' className='contact__pass'  />
              <span>4 k 7 Z a</span>
            </li>
            <input type="submit" value="Отправить" className='contact__submit' />
          </form>

          <div className='contact__box'>
            <h2 className='contact__title' >NAMANGANLIKLAR24</h2>
            <ul className='contact__list'>
              <li className='contact__item'>
                Электронная почта
                <a href="mailto:info@namanganliklar24.uz" className='contact__link'>
                  info@namanganliklar24.uz
                </a>
              </li>

              <li className='contact__item'>
                Социальные сети
                <div className='contact__iconBox'>
                  <a href="https://www.facebook.com/" className='contact__linkIcon'>
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/" className='contact__linkIcon'>
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://www.odnoklassniki.com/" className='contact__linkIcon'>
                    <i class="fa-brands fa-square-odnoklassniki"></i>
                  </a>
                </div>
              </li>

              <li className='contact__item'>
                Телеграм канал
                <a href="#" className='contact__linkBtn'>
                  <i class="fa-brands fa-telegram"></i>
                  Подписатся
                </a>
              </li>
              <li className="contact__item">
                Мобильная приложение
                <div className='contact__imgBox'>
                  <img src={contactImg1} alt="" className="contact__img" />
                  <img src={contactImg2} alt="" className="contact__img" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
