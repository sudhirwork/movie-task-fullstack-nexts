"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { signIn } from "next-auth/react";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmitForm = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("password", { message: "invalid email or password" });
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
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
          <Button variant="primary" type="submit" isLoading={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
