import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {bookSlice} from './book/index.js'
import {categoriesSlice} from './categories/index.js'

export const store = configureStore({
	reducer: combineReducers({
		book: bookSlice.reducer,
		categories: categoriesSlice.reducer
	})
})

