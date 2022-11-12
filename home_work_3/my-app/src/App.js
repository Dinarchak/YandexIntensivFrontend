import './App.css';

import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import BookPage from './components/BookPage/BookPage.js'
import Basket from './components/Basket/Basket.js'

import {Provider}  from 'react-redux'
import {store} from './store/index.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() { 
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<Main/>}/>
                    <Route path="cart" element={<Basket/>}/>
                    <Route path=":bookId" element={<BookPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );  
}

// function App() {
//     return <>
//             <Header/>
//
//         </>
// }

export default App;