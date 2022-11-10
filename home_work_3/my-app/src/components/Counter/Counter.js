import style from './styles.module.css'
import template_styles from '../../constants/template_styles.module.css'
import {useSelector, useDispatch} from 'react-redux'
import classnames from 'classnames'
import { useState } from 'react'
import { cartSlice } from '../../store/cart/index.js'
import { selectBooksCount } from '../../store/cart/selectors.js'

function Counter(props) {
	const dispatch = useDispatch()
	const count = useSelector((state) => selectBooksCount(state, props.bookId))
	return <>
		<div className={classnames(style.book__buyForm, {[style.bottom]:props.bottom})}>
			<button className={classnames(style.book__decrement, template_styles.counterBtn)} onClick={() => dispatch(cartSlice.actions.removeBook(props.bookId))} disabled={count === undefined}>-</button>
			<span className={style.book__counter}>{count || 0}</span>
			<button className={classnames(style.book__increment, template_styles.counterBtn)} onClick={() => dispatch(cartSlice.actions.addBook(props.bookId))} disabled={count === 5}>+</button>
		</div>	
	</>
}

export default Counter