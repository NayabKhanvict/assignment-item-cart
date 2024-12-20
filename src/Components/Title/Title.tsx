import React from "react";
import clsx from "clsx";
import styles from "./Title.module.scss";

interface TitleProps {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
  weight?: "regular" | "medium" | "semibold";
  className?: string;
}

const weightMap = {
  regular: "font-weight-regular",
  medium: "font-weight-medium",
  semibold: "font-weight-semibold",
};

const Title = ({
  children,
  size = "medium",
  weight = "regular",
  className,
}: TitleProps) => {
  const titleClasses = clsx(
    styles.title,
    styles[size],
    styles[weightMap[weight]],
    className
  );

  return <span className={titleClasses}>{children}</span>;
};

export default Title;
