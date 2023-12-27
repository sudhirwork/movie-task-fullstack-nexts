import React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  label: string;
}

export default function Checkbox({ id, label, ...rest }: CheckboxProps) {
  return (
    <div className="form-check">
      <input className="form-check-input" id={id} type="checkbox" {...rest} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
