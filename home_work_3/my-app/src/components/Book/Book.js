import style from './styles.module.css'
import classnames from 'classnames'
import template_styles from '../../constants/template_styles.module.css'
import Counter from '../Counter/Counter.js'
import {Link} from 'react-router-dom'

function get_item(i, k) {
	return <li className={classnames(style.itemList__item, template_styles.text)} key={k}>{i}</li>
}

export default (props) => {
	return	(<div className={style.book}>
				<Link to={`/${props.params.id}`}><h3 className={template_styles.title}>{props.params.name}</h3></Link>
				<div>
					<ul className={style.itemList}>
						{props.params.authors.map(get_item)}
					</ul>
					<ul className={style.itemList}>
						{props.params.genres.map(get_item)}	
					</ul>
					<h2 className={template_styles.title}>{props.params.price}&nbsp;₽</h2>
					<Counter bottom={props.bottom} bookId={props.params.id}/>
				</div>
			</div>)
}