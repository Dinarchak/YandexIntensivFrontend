import { bookSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadBooksByIdsIfNotExist = (ids) => (dispatch, getState) => {
		dispatch(bookSlice.actions.startLoading())
		let url = 'http://localhost:3001/api/books/ids?'
		for (let i = 0; i < ids.length - 1; i++) {
			url += `id${i}=${ids[i]}&`
		}
		url += `id${ids.length - 1}=${ids[ids.length - 1]}`
		console.log(url)
		fetch(url)
		.then((response) => response.json())
		.then((res) => {
			dispatch(bookSlice.actions.successLoading(prepareData(res)))
		})
		.catch(() => {
			dispatch(bookSlice.actions.failLoading())
		})
}