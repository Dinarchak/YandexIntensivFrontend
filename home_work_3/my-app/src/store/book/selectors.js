function selectedBookModule(state) {
	return state.book
}

function selectBooks(state) {
	return Object.values(selectedBookModule(state).entities)
}

export default selectedBookModule
export { selectBooks }