import { bookSlice } from './index.js'
import { prepareData } from './utils.js'
import { selectBooks } from './selectors.js'

export const loadBooksIfNotExist = (dispatch, getState) => {

	if (selectBooks(getState()).length > 0) {
		return
	}
	dispatch(bookSlice.actions.startLoading())
	fetch('http://localhost:3001/api/books')
	.then((response) => response.json())
	.then((res) => {
		dispatch(bookSlice.actions.successLoading(prepareData(res)))
	})
	.catch(() => {
		dispatch(bookSlice.actions.failLoading())
	})
}	