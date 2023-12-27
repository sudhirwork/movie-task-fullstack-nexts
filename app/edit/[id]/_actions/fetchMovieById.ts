"use server";

export default async function fetchMovieById(id: string) {
  const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/get-single-movie/${id}`);
  const data = await res.json();
  return data;
}
