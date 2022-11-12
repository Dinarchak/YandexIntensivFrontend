import styles from './styles.module.css'
import classnames from 'classnames'

import {useState} from 'react'
import template_styles from '../../constants/template_styles.module.css'

import {useSelector, useDispatch} from 'react-redux'
import {selectCategories, selectIsCategoriesLoading} from '../../store/categories/selectors'
import {useEffect} from 'react'
import {loadCategoriesIfNotExist} from '../../store/categories/loadCategoriesIfNotExist.js'

import {selectBooks, selectIsBooksLoading} from '../../store/book/selectors'
import {loadBooksIfNotExist} from '../../store/book/loadBooksIfNotExist.js'

import BookList from '../../components/BookList/BookList.js'
import Book from '../../components/Book/Book.js'

function Main(props) {
	const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCategoriesIfNotExist)
    }, [])
    const categories = useSelector(selectCategories)
    const [selectedCategory, setSelectedCategory] = useState(0)
    useEffect(() => {
		dispatch(loadBooksIfNotExist(selectedCategory))
	}, [selectedCategory])
    const isCategotiesLoading = useSelector(selectIsCategoriesLoading)
    const isBooksLoading = useSelector(selectIsBooksLoading)
    const books = useSelector(selectBooks)
    if (isBooksLoading || isCategotiesLoading) {
    	return <>
    			<div className={styles.mainBlock}>
					<h1 className={template_styles.title}>Loading...</h1>
				</div>
    			</>
    }

	return <>
		<div className={styles.mainBlock}>
			<div className={styles.menu}>
				{
					categories.map((i) => <button 	className={classnames(styles.genre,
																		 {[template_styles.subTitle]:selectedCategory === i.id})}
													onClick={(j) => setSelectedCategory(i.id)}
													key={i.id}>
														{i.name}
													</button>)
				}
			</div>
			<div className={styles.books}>
				<BookList books={books}/>
			</div>
		</div>
		</>
}

export default Main

// {
// 	categories.map((i) => 
// 		<button className={classnames(styles.genre, {[template_styles.subTitle]:selectedCategory.id === i.id})}
// 				onClick={(j) => setSelectedCategory(i)} 
// 				key={i.id}>
// 			{i.name}
// 		</button>)
// }
