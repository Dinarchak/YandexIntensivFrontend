import {Statuses} from '../../constants/statuses.js'

function selectedCategoriesModule(state) {
	return state.categories
}

function selectCategories(state) {
	return Object.values(selectedCategoriesModule(state).entities)
}

function selectIsCategoriesLoading(state) {
	return selectedCategoriesModule(state).status === Statuses.inProgress
}

export {selectedCategoriesModule, selectCategories, selectIsCategoriesLoading}