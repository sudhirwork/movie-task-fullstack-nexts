import React, { Suspense } from "react";
import MovieHeader from "./_components/movie-header";
import MoviesList from "./_components/movies-list";
import MoviesListLoading from "./_components/movies-list-loading";
import { getMovies } from "./_actions/getMovies";
import EmptyMovie from "./_components/empty-movie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
};

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Movies({ searchParams }: Props) {
  const page = searchParams.page || "1";
  const { data: movies } = await getMovies(page as string);

  if (movies.length === 0) return <EmptyMovie />;

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
