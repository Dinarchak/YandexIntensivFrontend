import './App.css';
import genres from  './constants/genres.js'
import books from './constants/books.js'
import BookList from './components/BookList/BookList.js'
import Menu from'./components/Menu/Menu.js'
import styles from './App.module.css'

function App() {
    return (
        <>
            <div className={styles.mainBlock}>
                <div className={styles.menu}>
                    <Menu params={genres}/>
                </div>
                <div className={styles.books}>
                    <BookList books={books}/>
                </div>
            </div>
        </>
    );  
}

export default App;