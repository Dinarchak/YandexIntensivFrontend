import { reviewSlice } from './index.js'
import { prepareData } from './utils.js'

export const loadReviewsIfNotExist = (bookId) => (dispatch, getState) => {
		dispatch(reviewSlice.actions.startLoading())
		console.log(`http://localhost:3001/api/reviews?bookId=${bookId}`)
		fetch(`http://localhost:3001/api/reviews?bookId=${bookId}`)
		.then((response) => response.json())
		.then((res) => {
			dispatch(reviewSlice.actions.successLoading(prepareData(res)))
		})
		.catch(() => {
			dispatch(reviewSlice.actions.failLoading())
		})
}