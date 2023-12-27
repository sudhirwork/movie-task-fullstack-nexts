"use client";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";

const schema = Yup.object({
  email: Yup.string()
    .email("Must be valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="movie-main">
      <div className="auth-screen">
        <h1 className="auth-title">Sign in</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            type="email"
            placeholder="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Checkbox id="remember" label="Remember me" />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
