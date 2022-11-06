import styles from './styles.module.css'
import ImgBlock from '../ImgBlock/ImgBlock.js'

function Header(props) {
     return <> 
               <header className={styles.header}>
                    <h1 className={styles.title}>Магазин</h1>
                    <ImgBlock path="basket.svg" alt="Корзина"/>
               </header>
          </>
}

 export default Header