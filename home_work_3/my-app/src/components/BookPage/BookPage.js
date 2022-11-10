import Book from '../Book/Book.js'
import Comments from '../Comments/Comments.js'
import styles from './style.module.css'
import template_styles from '../../constants/template_styles.module.css'
import {useParams} from 'react-router-dom'
import {selectBookById, selectIsBooksLoaded} from '../../store/book/selectors.js'
import {selectReviews} from '../../store/reviews/selectors.js'
import {useSelector, useDispatch} from 'react-redux'
import {loadReviewsIfNotExist} from '../../store/reviews/loadReviewsIfNotExist'
import {loadBooksIfNotExist} from '../../store/book/loadBooksIfNotExist'
import {loadBook} from '../../store/book/loadBook'
import {useEffect} from 'react'


export default function(props) {
	const { bookId } = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadReviewsIfNotExist(bookId))
	}, [])
	if (!useSelector(selectIsBooksLoaded)) {
		console.log("loading one book")
		dispatch(loadBook(bookId))
	}
	const book = useSelector((state) => selectBookById(state, bookId))
	const reviews = useSelector(selectReviews)
	return (<> 
				<div className={styles.mainBlock}>
            		<div className={styles.description}>
    	            	<Book params={book} bottom={true}/>
	                	<div className={styles.annotations}>
        	            	<h2 className={template_styles.title}>Аннотации</h2>
                    		<p className={template_styles.text}>{book.annotations}</p>
	                	</div>
            		</div>
	            	<Comments comments={reviews}/>
        		</div>
        	</>)
}