import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'

import {selectIsBooksLoading, selectBooks} from '../../store/book/selectors'
import {loadBooksByIdsIfNotExist} from '../../store/book/loadBooksByIdsIfNotExist.js'

import {selectedCartModule} from '../../store/cart/selectors.js'

import BookList from '../../components/BookList/BookList.js'
import BooksInBasket from '../../components/BooksInBasket/BooksInBasket.js'

import styles from './styles.module.css'
import template_styles from '../../constants/template_styles.module.css'

function Basket(props) {
	const dispatch = useDispatch()
	const desiredBooks = useSelector(selectedCartModule)
	useEffect(() => {
		console.log("Запрос совершён")
		dispatch(loadBooksByIdsIfNotExist(Object.keys(desiredBooks)))
	}, [])
	const books = useSelector(selectBooks)
	const isLoading = useSelector(selectIsBooksLoading)
	if (isLoading) {
		return <h1 className={template_styles.title}>Loading...</h1>
	}

	return <>
			<div className={styles.mainBlock}>
				<div className={styles.booksList}>
					<BooksInBasket books={books} cart={desiredBooks}/>
				</div>
				<div className={styles.books}>
					<BookList books={books}/>
				</div>
			</div>
			</>
}

export default Basket