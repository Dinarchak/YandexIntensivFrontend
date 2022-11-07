import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {bookSlice} from './book/index.js'

export const store = configureStore({
	reducer: combineReducers({
		book: bookSlice.reducer
	})
})

