import classnames from 'classnames'
import template_styles from '../../constants/template_styles.module.css'
import styles from './styles.module.css'

function get_item(i) {
	return <button><span key={i.id} className={classnames(template_styles.text, styles.genre)}>{i.name}</span></button>
}

export default function(props) {
	return props.genres.map(get_item)
}