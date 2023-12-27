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

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={button({ variant })} {...rest}>
      {children}
    </button>
  );
}
