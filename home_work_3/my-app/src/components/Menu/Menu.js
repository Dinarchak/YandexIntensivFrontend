import Genres from '../Genres/Genres.js'
import classnames from 'classnames'
import template_styles from '../../constants/template_styles.module.css'

function Menu(props) {
	return 	(<> 
				<p className={template_styles.subTitle}>Художественная&nbsp;литература</p>
				<Genres genres={props.params}/>
			</>)

}

export default Menu