import './App.css';
import genres from  './constants/genres.js'
import books from './constants/books.js'
import BookList from './components/BookList/BookList.js'
import Menu from'./components/Menu/Menu.js'

function App() {
    return (
        <>
            <div>
                <Menu params={genres}/>
            </div>
            <div>
                <BookList books={books}/>
            </div>
        </>
    );  
}

export default App;