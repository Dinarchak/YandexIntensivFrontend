import './App.css';
import genres from  './constants/genres.js'
import books from './constants/books.js'
import description from './constants/book_description.js'
import BookList from './components/BookList/BookList.js'
import Book from './components/Book/Book.js'
import Comments from './components/Comments/Comments.js'
import Book_page from './components/Book_page/Book_page.js'
import styles from './App.module.css'
import classnames from 'classnames'
import template_styles from './constants/template_styles.module.css'
import {useState} from 'react'

function App() { 
    const [selectedGenre, setSelectedGenre] = useState(genres[0])
    return (
        <>
            <div className={styles.mainBlock}>
                <div className={styles.menu}>
                    {genres.map((i) => <button className={classnames(styles.genre, {[template_styles.subTitle]:selectedGenre.id == i.id})} onClick={(j) => setSelectedGenre(i)} key={i.id}>{i.name}</button>)}
                </div>
                <div className={styles.books}>
                    <BookList books={books} selected={selectedGenre}/>
                </div>
            </div>
        </>
    );  
}

// function App() {
//     const [selectedGenre, setSelectedGenre] = useState(genres[0])
//     console.log(books[0])
//     return <Book_page books={books} description={description}/>
// }

export default App;