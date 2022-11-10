import styles from './styles.module.css'
import ImgBlock from '../ImgBlock/ImgBlock.js'
import {Link} from 'react-router-dom'

function Header(props) {
     return <> 
               <header className={styles.header}>
                    <Link to="/">
                         <h1 className={styles.title}>Магазин</h1>
                    </Link>
                    <Link to="/cart">
                         <ImgBlock path="basket.svg" alt="Корзина"/>
                    </Link>
               </header>
          </>
}

 export default Header