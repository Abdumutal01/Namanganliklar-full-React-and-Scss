import React from 'react'
import './MainPolicy.scss'
import Policy from './Policy/Policy'
import PolicyRight from './PolicyRight/PolicyRight'

export default function MainPolicy() {
    return (
        <section className='main__policy policyDiv'>
            <h2 className='policy__title'>Политика</h2>
            <div className="policy__general">
                <div>
                    <Policy />
                    <button className='policy__btn'>Больше новостей</button>
                </div>
                <PolicyRight />
            </div>
        </section>
    )
}
