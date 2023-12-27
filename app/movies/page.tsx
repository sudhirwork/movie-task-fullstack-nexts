import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";
import MovieItem from "./movie-item";
import MovieHeader from "./movie-header";

export default function Movies() {
  return (
    <div className="movie-main movie-list-screen">
      <div className="ml-main">
        <MovieHeader />
        <div className="ml-body">
          <div className="ml-lists">
            <MovieItem title="Movie 1" releaseYear={2021} thumbnail="/m1.png" />
            <MovieItem title="Movie 1" releaseYear={2021} thumbnail="/m2.png" />
            <MovieItem title="Movie 1" releaseYear={2021} thumbnail="/m3.png" />
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m1.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m2.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m2.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m3.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m1.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m2.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m2.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
            <a href="javascript:;" className="ml-list-item">
              <figure>
                <img src="/m3.png" alt="" />
              </figure>
              <div className="mdetail">
                <h5>Movie 1</h5>
                <span>2021</span>
              </div>
            </a>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link index" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link index" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
