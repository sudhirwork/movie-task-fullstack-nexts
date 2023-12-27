import { Metadata } from "next";
import CreateMovieForm from "./create-movie-form";

export const metadata: Metadata = {
  title: "Create Movie",
  description: "Create Movie",
};

export default function CreateMovie() {
  return <CreateMovieForm />;
}
