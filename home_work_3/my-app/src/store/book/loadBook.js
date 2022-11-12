import { bookSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadBook = (id) => (dispatch, getState) => {
		dispatch(bookSlice.actions.startLoading())
		fetch(`http://localhost:3001/api/books?id=${id}`)
		.then((response) => response.json())
		.then((res) => {
			let a = prepareData(res)
			dispatch(bookSlice.actions.successLoading(a))
		})
		.catch(() => {
			dispatch(bookSlice.actions.failLoading())
		})
}