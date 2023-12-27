import React from "react";
import SignInForm from "./sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignIn() {
  return <SignInForm />;
}
