import React, { Suspense } from "react";
import MovieHeader from "./_components/movie-header";
import MoviesList from "./_components/movies-list";
import MoviesListLoading from "./_components/movies-list-loading";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Movies({ searchParams }: Props) {
  const page = searchParams.page || "1";

  return (
    <div className="movie-main movie-list-screen">
      <div className="ml-main">
        <MovieHeader />
        <div className="ml-body">
          <Suspense fallback={<MoviesListLoading />}>
            <MoviesList page={page as string} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
