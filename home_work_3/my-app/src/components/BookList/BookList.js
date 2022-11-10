import Book from '../Book/Book.js'
import template_styles from '../../constants/template_styles.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {selectBooks, selectIsBooksLoading} from '../../store/book/selectors'
import {useEffect} from 'react'
import {loadBooksIfNotExist} from '../../store/book/loadBooksIfNotExist.js'


function get_item(i) {
	return <Book key={i.id} params={i} bottom={false}></Book>
}

function BookList(props) {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadBooksIfNotExist(props.selected))
	}, [props.selected])
	const books = useSelector(selectBooks)
	if (useSelector(selectIsBooksLoading)) {
		return <h1 className={template_styles.title}>Loading</h1>
	}
	return books.map(get_item)
}

export default BookList

// export default (props) => {
// 	return props.books[props.selected.id].map(get_item)
// }