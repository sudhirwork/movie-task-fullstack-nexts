"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Image from "next/image";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = Yup.object({
  image: Yup.mixed().test("fileSize", "The file is too large", (value: any) => {
    if (!value.length) return true; // attachment is optional
    return value[0].size <= 2000000;
  }),
  title: Yup.string().required("Title is required"),
  publishingYear: Yup.number()
    .min(1900, "Year must be greater than 1900")
    .max(new Date().getFullYear(), "Year must be less than 2022")
    .typeError("Year must be a number")
    .required("Publishing Year is required"),
});

export default function CreateMovieForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="movie-main create-movie">
      <div className="cmovie-main cm-web">
        <h4>Create a new movie</h4>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <div className="cmovie-fold">
            <div className="upload-img">
              <figure>
                <Image src="/download.png" alt="" fill />
              </figure>
              <span>Drop an image here</span>
              <input type="file" accept="image/*" {...register("image")} />
              {errors.image && (
                <p className="error-message">{errors.image.message}</p>
              )}
            </div>
            <div className="cmovie-form">
              <Input
                placeholder="Title"
                register={register}
                name="title"
                error={errors.title?.message}
              />

              <Input
                type="number"
                placeholder="Publishing year"
                className="pyear"
                register={register}
                min={1900}
                max={new Date().getFullYear()}
                name="publishingYear"
                error={errors.publishingYear?.message}
              />

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
        </form>
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
