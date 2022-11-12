import Book from '../Book/Book.js'
import template_styles from '../../constants/template_styles.module.css'


function get_item(i) {
	return <Book key={i.id} params={i} bottom={false}></Book>
}

function BookList(props) {
	return props.books.map(get_item)
}

export default BookList
