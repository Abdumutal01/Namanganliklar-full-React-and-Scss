import React from 'react'
import '../Policy/Policy.scss'
import './PolicyRight.scss'
import ucell from '../../../../assets/img/policy__ucellImg.png'

export default function PolicyRight() {
  return (
    <div className='policy__rightDiv'>
      <div className='policy__rightBox'>
        <h2 className="policy__title">Cамые популярные новости</h2>
        <p className="policy__text">
          По факту прорыва Сардобинского
          <br /> водохранилища <br />
          возбуждено уголовное дело
        </p>
        <p className="policy__date">11:31 / 15.05.2020</p>

        <hr className='policy__line' />

        <p className="policy__text">
          По факту прорыва Сардобинского
          <br /> водохранилища <br />
          возбуждено уголовное дело
        </p>
        <p className="policy__date">11:31 / 15.05.2020</p>

        <hr className='policy__line' />

        <p className="policy__text">
          По факту прорыва Сардобинского
          <br /> водохранилища <br />
          возбуждено уголовное дело
        </p>
        <p className="policy__date">11:31 / 15.05.2020</p>

        <hr className='policy__line' />

        <p className="policy__text">
          По факту прорыва Сардобинского
          <br /> водохранилища <br />
          возбуждено уголовное дело
        </p>
        <p className="policy__date">11:31 / 15.05.2020</p>

      </div>
      <img src={ucell} alt="" className='policy__ucellImg' />
    </div>
  )
}
