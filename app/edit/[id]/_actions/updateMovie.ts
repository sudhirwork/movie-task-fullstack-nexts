"use server";

import { revalidatePath } from "next/cache";

export default async function updateMovie(formData: FormData) {
  const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/movies`, {
    method: "PUT",
    body: formData,
  });
  const data = await res.json();
  revalidatePath("/movies");
  return data;
}
