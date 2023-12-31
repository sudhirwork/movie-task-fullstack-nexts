import { cva, type VariantProps } from "class-variance-authority";

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
      <div className="d-flex align-items-center justify-content-center gap-2">
        {isLoading && (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {children}
      </div>
    </button>
  );
}
