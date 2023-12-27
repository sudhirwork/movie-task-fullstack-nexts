"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function EmptyMovie() {
  const router = useRouter();

  return (
    <div className="movie-main">
      <div className="empty-screen">
        <h2>Your movie list is empty</h2>
        <Button onClick={() => router.push("/create-movie")}>
          Add a new movie
        </Button>
      </div>
    </div>
  );
}
