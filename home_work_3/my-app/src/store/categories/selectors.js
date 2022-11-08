function selectedCategoriesModule(state) {
	return state.categories
}

function selectCategories(state) {
	return Object.values(selectedCategoriesModule(state).entities)
}

export default selectedCategoriesModule
export { selectCategories }