import React from 'react'
import './HomeEnd.scss'
import homeEndImg1 from '../../../../assets/img/homeEndImg1.png'
import homeEndImg2 from '../../../../assets/img/homeEndImg2.png'
import homeEndImg3 from '../../../../assets/img/homeEndImg3.png'

export default function HomeEnd() {
    return (
        <div className='homeEnd'>
            <div className="homeEnd__data">
                <img src={homeEndImg1} alt="" className='homeEnd__img1' />
                <h2 className="homeEnd__title">
                    Всегда будьте в курсе последних новостей! 
                    <span className='homeEnd__span'>
                        Установите мобильное приложение NAMANGANLIKLAR24 
                        и все новости в вашем кармане!
                    </span>
                </h2>
            </div>
            <div className="homeEnd__imgBox" style={{display:"flex", gap:"20px"}}>
                <img src={homeEndImg2} alt="" className="homeEnd__img2" />
                <img src={homeEndImg3} alt="" className="homeEnd__img2" />
            </div>
        </div>
    )
}
