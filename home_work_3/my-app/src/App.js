import './App.css';
import genres from  './constants/genres.js'
import books from './constants/books.js'
import BookList from './components/BookList/BookList.js'
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
export default App;