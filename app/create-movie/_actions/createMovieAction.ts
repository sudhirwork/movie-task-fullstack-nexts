"use server";

export default async function createMovieAction() {
  const res = await fetch("http://localhost:3000/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const data = await res.json();
  return data;
}
