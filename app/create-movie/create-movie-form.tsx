"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import createMovie from "./_actions/createMovie";

const schema = Yup.object({
  file: Yup.mixed()
    .required("File is required")
    .test({
      message: "Pick an image file",
      test: (file: any, context: any) => {
        return file.length > 0;
      },
    })
    .test({
      message: "Please pick an image file",
      test: (file: any, context: any) => {
        if (file.length === 0) return false;
        const isValid = ["image/jpeg", "image/jpg", "image/png"].includes(
          file[0].type
        );
        return isValid;
      },
    })
    .test({
      message: "File too large",
      test: (file: any, context: any) => {
        if (file.length === 0) return false;
        const isValid = file[0].size <= 5 * 1024 * 1024;
        return isValid;
      },
    }),
  title: Yup.string().required("Title is required"),
  publishingYear: Yup.number()
    .min(1900, "Year must be greater than 1900")
    .max(new Date().getFullYear(), "Year must be less than 2022")
    .typeError("Year must be a number")
    .required("Publishing Year is required"),
});

export default function CreateMovieForm() {
  const [file, setFile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const pickedItem: any = watch("file");

  useEffect(() => {
    setFile(pickedItem && pickedItem[0]);
  }, [pickedItem]);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("title", data.title);
      formData.append("publishingYear", data.publishingYear);

      const { response, error } = await createMovie(formData);
      if (error) throw error;

      router.back();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    reset();
    setFile(null);
    router.back();
  };

  return (
    <div className="movie-main create-movie">
      <div className="cmovie-main">
        <h4>Create a new movie</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cmovie-fold d-flex flex-md-row flex-column ">
            <div
              className={`order-2 order-md-1 upload-img ${
                errors.file ? "has-error" : ""
              }`}
            >
              {file && !errors.file && (
                <Image
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="rounded-2"
                  fill
                />
              )}

              <figure>
                <Image src="/download.png" alt="" fill />
              </figure>
              <span className="z-3">Drop an image here</span>
              {errors.file && (
                <span className="error-message z-3">{errors.file.message}</span>
              )}
              <input type="file" accept="image/*" {...register("file")} />
            </div>
            <div className="cmovie-form order-1 order-md-2">
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

              <div className="action-btn d-none d-md-flex">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button variant="primary" isLoading={isLoading}>
                  Submit
                </Button>
              </div>
            </div>
            <div className="action-btn d-flex d-md-none order-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setFile(null);
                  reset();
                  setIsLoading(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" isLoading={isLoading}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
