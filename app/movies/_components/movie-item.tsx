import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MovieItemProps {
  id: string;
  title: string;
  releaseYear: number;
  thumbnail: string;
}

export default function MovieItem({
  id,
  title,
  releaseYear,
  thumbnail,
}: MovieItemProps) {
  return (
    <Link href={`/edit/${id}`} className="ml-list-item">
      <figure>
        <Image src={thumbnail} alt="" fill />
      </figure>
      <div className="mdetail">
        <h5>{title}</h5>
        <span>{releaseYear}</span>
      </div>
    </Link>
  );
}
