import React from 'react'
import './Assets/Error.scss'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className='containerError'>
            <img className='ErrorImage' src="https://static.vecteezy.com/system/resources/previews/008/568/882/original/website-page-not-found-error-404-robot-character-broken-chatbot-mascot-disabled-site-on-technical-work-web-design-template-cartoon-online-bot-crash-accident-robotic-assistance-failure-eps-vector.jpg" alt="" srcset="" />
            <h1 className='Error'>¡oops it seems that this page does not exist yet! </h1>
            <Link to="/" className='BackToHome' > Back to top</Link>
        </div>
    )
}
