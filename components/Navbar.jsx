import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="d-flex justify-content-center gap-5 my-4 fs-3"
      style={{ fontFamily: "Staatliches", color: "rgb(212, 212, 212)" }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab-07</a>
      </Link>
    </div>
  );
}
