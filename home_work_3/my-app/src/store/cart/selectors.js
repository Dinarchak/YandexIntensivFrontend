function selectedCartModule(state) {
	return state.cart
}

function selectBooksCount(state, bookId) {
	return selectedCartModule(state)[bookId]
}

function selectBooksIds(state) {
	return Object.keys(selectedCartModule(state))
}

export { selectedCartModule, selectBooksCount, selectBooksIds }