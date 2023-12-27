import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
}

export default function Input({
  type = "text",
  placeholder = "Default placeholder",
  name,
  register,
  ...rest
}: InputProps) {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </div>
  );
}
