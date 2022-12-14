import { bookSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadBooksIfNotExist = (category) => (dispatch, getState) => {
		dispatch(bookSlice.actions.startLoading())
		fetch(`http://localhost:3001/api/books?category=${category}`)
		.then((response) => response.json())
		.then((res) => {
			dispatch(bookSlice.actions.successLoading(prepareData(res)))
		})
		.catch(() => {
			dispatch(bookSlice.actions.failLoading())
		})
}