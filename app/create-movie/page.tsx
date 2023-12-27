import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Movie",
  description: "Create Movie",
};

export default function CreateMovie() {
  return (
    <div className="movie-main create-movie">
      <div className="cmovie-main cm-web">
        <h4>Create a new movie</h4>
        <div className="cmovie-fold">
          <div className="upload-img">
            <figure>
              <img src="/download.png" alt="" />
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
              <button type="button" className="secondary-btn">
                Cancel
              </button>
              <button type="button" className="mprimary-btn">
                Submit
              </button>
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
                <img src="/download.png" alt="" />
              </figure>
              <span>Drop an image here</span>
              <input type="file" />
            </div>
            <div className="action-btn">
              <button type="button" className="secondary-btn">
                Cancel
              </button>
              <button type="button" className="mprimary-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
