"use client";

import Button from "@/components/ui/button";
import Image from "next/image";

export default function CreateMovieForm() {
  return (
    <div className="movie-main create-movie">
      <div className="cmovie-main cm-web">
        <h4>Create a new movie</h4>
        <div className="cmovie-fold">
          <div className="upload-img">
            <figure>
              <Image src="/download.png" alt="" fill />
            </figure>
            <span>Drop an image here</span>
            <input type="file" />
          </div>
          <div className="cmovie-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="form-group pyear">
              <input
                type="text"
                className="form-control"
                placeholder="Publishing year"
              />
            </div>
            <div className="action-btn">
              <Button
                variant="secondary"
                onClick={() => {
                  alert("cancle");
                  console.log("click");
                }}
              >
                Cancel
              </Button>
              <Button variant="primary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="cmovie-main cm-mobile">
        <h4>Create a new movie</h4>
        <div className="cmovie-fold">
          <div className="cmovie-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="form-group pyear">
              <input
                type="text"
                className="form-control"
                placeholder="Publishing year"
              />
            </div>
            <div className="upload-img">
              <figure>
                <Image src="/download.png" alt="" fill />
              </figure>
              <span>Drop an image here</span>
              <input type="file" />
            </div>
            <div className="action-btn">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
