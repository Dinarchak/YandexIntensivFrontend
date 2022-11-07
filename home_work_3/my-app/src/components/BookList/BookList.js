import Book from '../Book/Book.js'
import {useSelector, useDispatch} from 'react-redux'
import {selectBooks} from '../../store/book/selectors'
import {useEffect} from 'react'
import {loadBooksIfNotExist} from '../../store/book/loadBooksIfNotExist.js'


function get_item(i) {
	return <Book params={i} key={i.id} bottom={false}></Book>
}

function BookList(props) {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadBooksIfNotExist)
	}, [])
	const books = useSelector(selectBooks)
	console.log(books)
	return books.map(get_item)
}

export default BookList

// export default (props) => {
// 	return props.books[props.selected.id].map(get_item)

// }