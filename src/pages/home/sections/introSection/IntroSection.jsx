import React from 'react'
import style from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <div className={style.section}>
        <div className={style.container}>
            <div className={style.text}>
                <h1>Startup you can build a website online using the Bootstrap builder.</h1>
                <button>Visit Our Works</button>
            </div>
        </div>
    </div>
  )
}

export default IntroSection