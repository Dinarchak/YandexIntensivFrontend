import {useState} from 'react'
import style from './styles.module.css'
import classnames from 'classnames'
import template_styles from '../../constants/template_styles.module.css'


function get_item(i) {
	return <li className={classnames(style.itemList__item, template_styles.text)} key={i.id}>{i.name}</li>
}

export default (props) => {
	const [count, setCount] = useState(0)
	return	(<div className={style.book}>
				<h3 className={template_styles.title}>{props.params.name}</h3>
				<div>
					<ul className={style.itemList}>
						{props.params.authors.map(get_item)}
					</ul>
					<ul className={style.itemList}>
						{props.params.genres.map(get_item)}	
					</ul>
					<div className={style.book__buyForm}>
						<button className={classnames(style.book__decrement, template_styles.counterBtn)} onClick={() => setCount(count - 1)} disabled={count == 0}>-</button>
						<span className={style.book__counter}>{count}</span>
						<button className={classnames(style.book__increment, template_styles.counterBtn)} onClick={() => setCount(count + 1)} disabled={count == 5}>+</button>
					</div>
				</div>
			</div>)
}