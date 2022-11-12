import template_styles from '../../constants/template_styles.module.css'
import styles from './styles.module.css'
import classnames from 'classnames'

function get_item(i) {
	return <div className={styles.bookPrice} key={i.id}>
		<p>{i.name}</p>
		<span>{i.price}&nbsp;₽</span>
	</div>
}

function get_sum(arr, repeats) {
	let totalPrice = 0
	for(let i = 0; i < arr.length; i++) {
		if (repeats[arr[i].id])
			totalPrice += arr[i].price * repeats[arr[i].id]
	}
	return `Итого: ${totalPrice} ₽`
}

function BooksInBasket(props) {
	return <>
			<h2 className={template_styles.title}>Ваш заказ:</h2>
			{ props.books.map(get_item) }
			<div className={classnames(styles.bookPrice, styles.totalPrice)}>
				<h2 className={template_styles.subTitle}>
					{get_sum(props.books, props.cart)}
				</h2>
				<button type="submit" disabled={!props.books.length} className={classnames(template_styles.counterBtn, styles.byBtn)}>Купить</button>
			</div>
		</>
}

export default BooksInBasket