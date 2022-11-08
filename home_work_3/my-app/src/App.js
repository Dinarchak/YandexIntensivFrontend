import './App.css';

import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import BookPage from './components/BookPage/BookPage.js'

import {Provider}  from 'react-redux'
import {store} from './store/index.js'


function App() { 
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(loadCategoriesIfNotExist)
    // }, [])
    // const categories = useSelector(selectCategories) 
    // const [selectedCategory, setSelectedCategory] = useState(categories[0])

    return (
        <Provider store={store}>
            <Header/>
            <Main/>
        </Provider>
    );  
}

// function App() {
//     return <>
//             <Header/>
//             <BookPage books={books} description={description}/>
//         </>
// }

export default App;