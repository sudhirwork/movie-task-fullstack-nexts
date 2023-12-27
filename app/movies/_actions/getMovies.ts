"use server";

import { Movie } from "../_types/movies";

export async function getMovies(
  page: string
): Promise<{ data: Movie[]; totalPages: number }> {
  const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/movies?page=${page}`);
  const data = await res.json();
  return data;
}
