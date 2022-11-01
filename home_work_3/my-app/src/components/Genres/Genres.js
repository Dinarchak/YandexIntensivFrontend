export default function(props) {
	console.log(props.genres)
	return props.genres.map(function f(i) {
		return <><p key={i.id}>{i.name}</p></>
	})
}