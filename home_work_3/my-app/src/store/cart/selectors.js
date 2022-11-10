function selectedCartModule(state) {
	return state.cart
}

function selectBooksCount(state, bookId) {
	return selectedCartModule(state)[bookId]
}

export { selectedCartModule, selectBooksCount }