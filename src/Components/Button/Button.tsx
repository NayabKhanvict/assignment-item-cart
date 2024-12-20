import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: "full" | "small" | "medium";
}

const Button = ({
  className = "",
  size = "medium",
  children,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[size], className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
