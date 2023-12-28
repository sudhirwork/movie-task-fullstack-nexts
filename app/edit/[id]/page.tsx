import React from "react";
import { Metadata } from "next";

import EditForm from "./edit-form";
import fetchMovieById from "./_actions/fetchMovieById";

export const metadata: Metadata = {
  title: "Edit",
};

export const revalidate = 0;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Edit({ params }: Props) {
  const movie = await fetchMovieById(params.id);

  return <EditForm id={params.id} {...movie} />;
}
