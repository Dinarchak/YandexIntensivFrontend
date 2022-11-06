import styles from './styles.module.css'

function ImgBlock(props) {
	return <div className={styles.imgBlock}><img src={props.path} alt={props.alt}/></div>
}

export default ImgBlock