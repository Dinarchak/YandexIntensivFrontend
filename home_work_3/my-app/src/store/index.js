import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {bookSlice} from './book/index.js'
import {categoriesSlice} from './categories/index.js'
import {cartSlice} from './cart/index.js'
import {reviewSlice} from './reviews/index.js'

export const store = configureStore({
	reducer: combineReducers({
		book: bookSlice.reducer,
		categories: categoriesSlice.reducer,
		cart: cartSlice.reducer,
		reviews: reviewSlice.reducer
	})
})


console.log(store.getState())