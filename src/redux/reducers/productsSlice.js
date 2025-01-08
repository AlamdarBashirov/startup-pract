import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsHomeThunk = createAsyncThunk('home/products', async () => {
    const response = await axios.get("https://dummyjson.com/products")
    return response.data.products
})

export const postProductsToBasketThunk = createAsyncThunk('home/products/sendBasket', async (data) => {
    const response = await axios.post("http://localhost:5500", {...data,id: data.id.toString()})
    return data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[]
    },
    reducer:[],
    extraReducers:builder => 
    builder

    .addCase(getProductsHomeThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase(getProductsHomeThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(getProductsHomeThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
    //post basket

    .addCase(postProductsToBasketThunk.fulfilled, (state, action) => {
        state.loading = false
    })
    .addCase(postProductsToBasketThunk.pending, (state) => {
        state.loading = true
    })
    .addCase(postProductsToBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})
export default productsSlice.reducer