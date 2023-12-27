import React, { Suspense } from "react";
import MovieHeader from "./_components/movie-header";
import MoviesList from "./_components/movies-list";
import MoviesListLoading from "./_components/movies-list-loading";

export default function Movies() {
  return (
    <div className="movie-main movie-list-screen">
      <div className="ml-main">
        <MovieHeader />
        <div className="ml-body">
          <Suspense fallback={<MoviesListLoading />}>
            <MoviesList />
          </Suspense>

          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link index" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link index" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
