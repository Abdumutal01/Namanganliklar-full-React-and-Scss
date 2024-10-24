import React from 'react'
import './Article.scss'
import '../Home/HomeNews/HomeNews.scss'
import Container from '../../../Container'
import ArticleImg from '../../../assets/img/articleimg1.png'
import homeNewImg1 from '../../../assets/img/homeNewImg1.png'
import homeNewImg2 from '../../../assets/img/homeNewImg2.jpg'
import homeNewImg3 from '../../../assets/img/homeNewImg3.jpg'
import PolicyRight from '../../Main/MainPolicy/PolicyRight/PolicyRight'

export default function Article() {
  let newArr = [
    {
      img: `${homeNewImg1}`,
      name: 'Мирзиёев рассказал, зачем было построено Сардобинское водохранилище',
      date: '05:28 / 16.05.2020'
    },
    {
      img: `${homeNewImg2}`,
      name: "Карантин в Узбекистане продлен до 1 июня",
      date: '05:28 / 16.05.2020'
    },
    {
      img: `${homeNewImg3}`,
      name: "Обмелевшая Сардоба: стихия или человеческий фактор?",
      date: '05:28 / 16.05.2020'
    }
  ]
  return (
    <Container>
      <section className='article'>
        <div className="article__general">
          <div className="article__data">
            <h2 className="article__title">
              Шавкат Мирзиёев строго предупредил хокимов всех уровней
              <br />
              <span className='article__span'>
                <i class="fa-solid fa-calendar-days"></i>
                11:31 / 15.05.2020
              </span>
            </h2>
            <img src={ArticleImg} alt="" className="article__img" />

            <p className="article__text">
              <b>
                19 мая состоялось видеоселекторное совещание, посвященное дополнительным мерам <br /> поддержки предпринимательства. <br /> <br />
              </b>
              По данным пресс-службы главы государства, из-за пандемии в Узбекистане число бедных и <br /> безработных увеличится, а доходы семей уменьшатся. На совещании обсуждены <br /> дополнительные меры и приоритетные задачи в этом направлении. <br /> <br />

              Прежде всего, серьезное внимание уделено обеспечению гарантий прав предпринимателей <br /> и неприкосновенности их имущества. <br /> <br />

              <b>
                <i>
                  «Предупреждаю всех хокимов. Если имущество хоть одного предпринимателя будет изъято <br /> незаконно, хоким одной лишь отставкой не отделается, но и ответит перед законом», - <br /> подчеркнул Шавкат Мирзиёев.
                </i>
              </b> <br /> <br />

              Компетентным ведомствам даны указания усилить ответственность за нарушение <br /> неприкосновенности собственности, обеспечить полноценное исполнение решений суда о <br /> компенсации имущества предпринимателей. <br /> <br />

              Согласно поручению президента деловая активность в каждом районе и городе будет <br /> анализироваться на ежемесячной основе. <br /> <br />

              Бизнес-омбудсман будет вносить правительству информацию о хокимах районов и городов, <br /> которые допускают нарушения прав и неприкосновенности собственности <br /> предпринимателей. <br /> <br />

              Кабинетом Министров будет рассматриваться вопрос о соответствии должности хокимов <br /> городов и районов, которые не решают проблемы предпринимателей и не работают с ними <br /> в достаточной мере. <br /> <br />
            </p>

            <p className="article__heshtak">
              #хоким  #Шавкат Мирзиёев  #пандемия
            </p>
            <hr className='article__line' />

          </div>

          <PolicyRight />
        </div>

        <h2>Новости по теме</h2>

        <div className='homeNew'>
          {newArr.map((item, index) => (
            <div className='homeNew__box' key={index}>
              <img src={item.img} alt="" className='homeNew__img' />
              <h2 className='homeNew__name'>{item.name}</h2>
              <p className="homeNew__date">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
