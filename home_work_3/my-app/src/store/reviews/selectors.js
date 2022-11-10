import {Statuses} from '../../constants/statuses.js'

function selectedReviewsModule(state) {
	return state.reviews
}

function selectReviews(state) {
	return Object.values(selectedReviewsModule(state).entities)
}

function selectIsReviewsLoading(state) {
	return selectedReviewsModule(state).status === Statuses.inProgress
}

export {selectedReviewsModule, selectReviews, selectIsReviewsLoading}