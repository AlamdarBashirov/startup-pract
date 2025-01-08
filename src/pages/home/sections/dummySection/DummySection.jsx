import React, { useEffect } from 'react'
import style from './DummySection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsHomeThunk, postProductsToBasketThunk } from '../../../../redux/reducers/productsSlice'
import HomeCard from '../../../../components/cards/homeCard/HomeCard'

const DummySection = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)

    useEffect(() => {
        dispatch(getProductsHomeThunk())
    }, [])

    const AddBasket = (item) =>{
      dispatch(postProductsToBasketThunk(item))
      console.log(item);
    }

    if (error) return <h1>Xeta bas verdi</h1>
    if (loading) return <h1>Yuklenir</h1>

  return (
    <div className={style.section}>
        <div className={style.container}>
            {products && products.map((item) => <HomeCard item={item} AddBasket={() => AddBasket(item)} />)}
        </div>
    </div>
  )
}

export default DummySection