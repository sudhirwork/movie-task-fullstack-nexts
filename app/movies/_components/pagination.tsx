"use client";

import Link from "next/link";
import React from "react";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  // Generate an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link className="page-link" href={`?page=${currentPage - 1}`}>
            Prev
          </Link>
        </li>

        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
          >
            <Link className="page-link index" href={`?page=${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <Link className="page-link" href={`?page=${currentPage + 1}`}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
