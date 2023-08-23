const MoviesList = ({movie}) => {
  return (
    <div>
      <h1>{movie.movie}</h1>
      <p>{movie.category}</p>
      <p>{movie.director}</p>
      <p>{movie.rating}</p>
      <br />
    </div>
  )
}

export default MoviesList