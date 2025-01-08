import React from 'react'
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="https://preview.colorlib.com/theme/startup2/img/logo.png" alt="" />
        </div>
        <div className={style.navigation}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Basket</a></li>
            <li><a href="">Wishlist</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className={style.sayHello}>
          <button>Say Hello</button>
        </div>
      </div>
    </div>
  )
}

export default Header