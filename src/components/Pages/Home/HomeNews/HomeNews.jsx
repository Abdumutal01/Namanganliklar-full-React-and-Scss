import React from 'react'
import './HomeNews.scss'
import homeNewImg1 from '../../../../assets/img/homeNewImg1.png'
import homeNewImg2 from '../../../../assets/img/homeNewImg2.jpg'
import homeNewImg3 from '../../../../assets/img/homeNewImg3.jpg'
import homeNewImg4 from '../../../../assets/img/homeNewImg4.jpg'
import homeNewImg5 from '../../../../assets/img/homeNewImg5.jpg'
import homeNewImg6 from '../../../../assets/img/homeNewImg6.jpg'


export default function HomeNews() {

    let newArr = [
        {
            img:`${homeNewImg1}`,
            name:'Мирзиёев рассказал, зачем было построено Сардобинское водохранилище' ,
            date:'05:28 / 16.05.2020'
        },
        {
            img:`${homeNewImg2}`,
            name:"Карантин в Узбекистане продлен до 1 июня",
            date:'05:28 / 16.05.2020'
        },
        {
            img:`${homeNewImg3}`,
            name:"Обмелевшая Сардоба: стихия или человеческий фактор?",
            date:'05:28 / 16.05.2020'
        },
        {
            img:`${homeNewImg4}`,
            name:"Следствие проверяет четыре версии прорыва Сардобинской плотины",
            date:'05:28 / 16.05.2020'
        },
        {
            img:`${homeNewImg5}`,
            name:"Выявлено еще 7 случаев коронавируса",
            date:'05:28 / 16.05.2020'
        },
        {
            img:`${homeNewImg6}`,
            name:"Итоги второго месяца карантина",
            date:'05:28 / 16.05.2020'
        },
    ]

  return (
    
    <div className='homeNew'>
      {newArr.map((item, index)=>(
        <div className='homeNew__box' key={index}>
            <img src={item.img} alt="" className='homeNew__img' />
            <h2 className='homeNew__name'>{item.name}</h2>
            <p className="homeNew__date">{item.date}</p>
        </div>
      ))}
    </div>
    
  )
}
