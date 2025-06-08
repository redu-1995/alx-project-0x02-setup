import React from "react";
import {type ButtonProps } from "@/interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  size,
  shape,
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
