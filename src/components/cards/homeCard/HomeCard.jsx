import React from 'react'
import style from './HomeCard.module.scss'

const HomeCard = ({item, AddBasket}) => {
  return (
    <div className={style.card}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div className={style.buttons}>
            <button onClick={AddBasket}>Add Basket</button>
            <button>Add Wishlist</button>
        </div>
    </div>
  )
}

export default HomeCard