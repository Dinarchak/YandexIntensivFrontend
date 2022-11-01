import Genres from '../Genres/Genres.js'

function Menu(props) {
	return 	<> 
				<h2>Художественная литература</h2>
				<Genres genres={props.params}/>
			</>

}

export default Menu