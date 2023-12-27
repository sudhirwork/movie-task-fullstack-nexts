import { getMovies } from "../_actions/getMovies";
import MovieItem from "./movie-item";
import Pagination from "./pagination";

type MovieListProps = {
  page: string;
};
export default async function MoviesList({ page }: MovieListProps) {
  const { data: movies, totalPages } = await getMovies(page);

  return (
    <>
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
      <Pagination totalPages={totalPages} currentPage={+page} />
    </>
  );
}
