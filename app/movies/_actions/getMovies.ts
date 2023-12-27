"use server";

import { Movie } from "../_types/movies";

export async function getMovies(): Promise<Movie[]> {
  const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/movies`);
  const data = await res.json();
  return data;
}
