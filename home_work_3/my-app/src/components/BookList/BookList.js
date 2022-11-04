import Book from '../Book/Book.js'

function get_item(i) {
	return <Book params={i} key={i.id} bottom={false}></Book>
}

export default (props) => {
	return props.books[props.selected.id].map(get_item)

}