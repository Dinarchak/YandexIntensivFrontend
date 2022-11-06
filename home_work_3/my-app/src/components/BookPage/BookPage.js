import Book from '../Book/Book.js'
import Comments from '../Comments/Comments.js'
import styles from './style.module.css'
import template_styles from '../../constants/template_styles.module.css'

export default function(props) {
	return (<> 
				<div className={styles.mainBlock}>
            		<div className={styles.description}>
    	            	<Book params={props.books[0][0]} bottom={true}/>
	                	<div className={styles.annotations}>
        	            	<h2 className={template_styles.title}>Аннотации</h2>
                    		<p className={template_styles.text}>{props.description[0].annotations}</p>
	                	</div>
            		</div>
	            	<Comments comments={props.description[0].comments}/>
        		</div>
        	</>)
}