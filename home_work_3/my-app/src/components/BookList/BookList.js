import Book from '../Book/Book.js'

export default (props) => {
	console.log(props.books)
	return props.books.map(function f(i) {
		return <div key={i.key}><Book params={i}></Book></div>
	})
}