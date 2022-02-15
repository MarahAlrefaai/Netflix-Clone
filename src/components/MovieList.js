import Movie from './Movie'
export default function MovieList(props){
return(
<>
{
  props.movie.map(element =>{
    return (
      <>
      <Movie dataOfMovie={element}/>
      </>
    )
  })
}
</>
)
}