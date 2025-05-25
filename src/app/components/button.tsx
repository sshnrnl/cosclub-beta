import React from "react";

type ButtonProps = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export function Button({
  className = "",
  text,
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const bgColor = variant === "primary" ? "bg-black" : "bg-white";
  const textColor = variant === "primary" ? "text-white" : "text-black";

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden  ${textColor} ${className}`}
    >
      {/* Decorative border image */}
      <img
        src="/assets/cloudy/button-border.png"
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Inner background border effect */}
      <div
        className={`absolute inset-[1%] pointer-events-none z-0 bg-inherit w-full h-full ${bgColor}`}
      ></div>

      {/* Content */}
      <span
        className={`relative z-30 w-full h-full flex items-center justify-center ${textColor}`}
      >
        {text || children}
      </span>
    </button>
  );
}
