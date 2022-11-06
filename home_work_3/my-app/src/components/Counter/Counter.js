import style from './styles.module.css'
import template_styles from '../../constants/template_styles.module.css'
import classnames from 'classnames'
import {useState} from 'react'

function Counter(props) {
	const [count, setCount] = useState(0)
	return <>
		<div className={classnames(style.book__buyForm, {[style.bottom]:props.bottom})}>
			<button className={classnames(style.book__decrement, template_styles.counterBtn)} onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
			<span className={style.book__counter}>{count}</span>
			<button className={classnames(style.book__increment, template_styles.counterBtn)} onClick={() => setCount(count + 1)} disabled={count === 5}>+</button>
		</div>	
	</>
}

export default Counter