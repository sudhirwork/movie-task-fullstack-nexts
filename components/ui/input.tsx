import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  error?: string;
}

export default function Input({
  type = "text",
  placeholder = "Default placeholder",
  name,
  error,
  register,
  ...rest
}: InputProps) {
  return (
    <div className={`form-group ${error ? "has-error" : ""}`}>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
      {error && <label className="error-message">{error}</label>}
    </div>
  );
}
