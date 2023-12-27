import { getMovies } from "../_actions/getMovies";
import MovieItem from "./movie-item";

export default async function MoviesList() {
  const movies = await getMovies();
  return (
    <div className="ml-lists">
      {movies.map((movie) => (
        <MovieItem
          key={movie._id}
          id={movie._id}
          releaseYear={movie.publishingYear}
          title={movie.title}
          thumbnail={movie.poster}
        />
      ))}
    </div>
  );
}
