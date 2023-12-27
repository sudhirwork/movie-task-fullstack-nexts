import { cva, type VariantProps } from "class-variance-authority";
import { boolean } from "yup";

const button = cva("", {
  variants: {
    variant: {
      primary: "mprimary-btn",
      secondary: "secondary-btn",
      ghost: "btn btn-ghost",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

export default function Button({
  variant,
  children,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={button({ variant })}
      disabled={disabled || isLoading}
      {...rest}
    >
      {children}
    </button>
  );
}
