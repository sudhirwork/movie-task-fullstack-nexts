import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";
import Image from "next/image";

export default function MovieHeader() {
  return (
    <div className="ml-header">
      <h4 className="d-flex align-items-center">
        My movies
        <Link href="/create-movie">
          <Image height={24} width={24} src="/plus-circle.svg" alt="" />
        </Link>
      </h4>
      <LogoutButton />
    </div>
  );
}
