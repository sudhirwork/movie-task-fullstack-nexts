import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MovieItemProps {
  title: string;
  releaseYear: number;
  thumbnail: string;
}

export default function MovieItem({
  title,
  releaseYear,
  thumbnail,
}: MovieItemProps) {
  return (
    <Link href="/edit" className="ml-list-item">
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
