import React from 'react'
import './MainStart.scss'
import MainStartImg1 from '../../../assets/img/Main__virus.png'
import MainStartImg2 from '../../../assets/img/Main__mask.png'
import MainStartImg3 from '../../../assets/img/Main__light.png'
import MainStartImg4 from '../../../assets/img/main__none.png'


const theSame = [
    {
        id: 1,
        inner: `в Узбекистане `,
        span: 'Коронавирус COVID-19',
        img: `${MainStartImg1}`,
        color: "#000000"
    },
    {
        id: 2,
        inner: "2753",
        span: 'Инфицированы',
        img: `${MainStartImg2}`,
        color: "#DB0000"
    },
    {
        id: 3,
        inner: "2245",
        span: 'Выздоровели',
        img: `${MainStartImg3}`,
        color: "#15CE3D"
    },
    {
        id: 4,
        inner: "12",
        span: 'Умерли',
        img: `${MainStartImg4}`,
        color: "#000000"
    },
]

export default function MainStart() {
    return (
        <div className='main__illBox illBox'>
            {theSame.map((item, i) => (
                <div className='d-flex'>
                    <img src={item.img} alt="" className='illBox__img' />
                    <h3 className="illBox__inner">
                        <span className='illBox__span'
                            style={{ color: `${item.color}` }} >
                            {item.span}
                        </span>
                        <br />
                        {item.inner}
                    </h3>
                </div>
            ))}

        </div>
    )
}
