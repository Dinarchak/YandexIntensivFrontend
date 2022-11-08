import styles from './styles.module.css'
import classnames from 'classnames'

import {useState} from 'react'
import template_styles from '../../constants/template_styles.module.css'

import {useSelector, useDispatch} from 'react-redux'
import {selectCategories} from '../../store/categories/selectors'
import {useEffect} from 'react'
import {loadCategoriesIfNotExist} from '../../store/categories/loadCategoriesIfNotExist.js'

import BookList from '../../components/BookList/BookList.js'
import Book from '../../components/Book/Book.js'

function Main(props) {
	const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCategoriesIfNotExist)
    }, [])
    const categories = useSelector(selectCategories)
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

	return <>
		<div className={styles.mainBlock}>
			<div className={styles.menu}>
				{categories.map((i) => <button className={styles.genre} onClick={(j) => setSelectedCategory(i)} key={i.id}>{i.name}</button>)}
			</div>
			<div className={styles.books}>
				<BookList selected={selectedCategory}/>
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
