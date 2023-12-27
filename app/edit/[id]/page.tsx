import React from "react";
import EditForm from "./edit-form";
import fetchMovieById from "./_actions/fetchMovieById";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function Edit({ params }: Props) {
  const movie = await fetchMovieById(params.id);

  return <EditForm id={params.id} {...movie} />;
}
