import React from "react";

const MovieLoadingItem = () => (
  <div className="ml-list-item">
    <figure>
      <div aria-hidden="true" className="placeholder-glow w-100 h-100">
        <span className="placeholder rounded-4 w-100 h-100"></span>
      </div>
    </figure>
    <div className="mdetail">
      <p aria-hidden="true" className="mb-0 placeholder-glow">
        <span className="placeholder col-12 rounded-4 m-0"></span>
      </p>
      <span aria-hidden="true" className="placeholder-glow">
        <span className="placeholder col-8 rounded-4"></span>
      </span>
    </div>
  </div>
);

export default function MoviesListLoading() {
  return (
    <div className="ml-lists">
      {Array.from({ length: 5 }, (_, i) => (
        <MovieLoadingItem key={`__movie_loading_${i}`} />
      ))}
    </div>
  );
}
