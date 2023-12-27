"use client";

import { signOut } from "next-auth/react";

import Button from "@/components/ui/button";
import Image from "next/image";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };
  return (
    <Button variant="ghost" onClick={handleLogout}>
      <div className="d-flex align-items-center gap-2 text-white fw-bold">
        Logout{" "}
        <span className="position-relative" style={{ width: 30, height: 30 }}>
          <Image src="/logout.svg" alt="" fill />
        </span>
      </div>
    </Button>
  );
}
