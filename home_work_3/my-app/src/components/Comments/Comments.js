import template_styles from '../../constants/template_styles.module.css'
import styles from './styles.module.css'

function get_item(i) {
	return  <div className={styles.comment} key={i.id}>
				<h2 className={template_styles.subTitle}>{i.author}</h2>
				<p className={template_styles.text}>{i.comment}</p>
			</div>	
}

export default function(props) {
	return props.comments.map(get_item)
}