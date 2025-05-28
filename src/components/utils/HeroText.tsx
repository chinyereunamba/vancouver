import React from "react";
type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HeroText({
  children,
  className = "max-w-4xl w-full ",
}: TextProps) {
  return (
    <h1
      className={`text-6xl text-center font-semibold leading-18 py-5 mx-auto ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionText({
  children,
  className = "text-center",
}: TextProps) {
  return (
    <h2
      className={`text-5xl font-semibold leading-18 py-5 mx-auto ${className}`}
    >
      {children}
    </h2>
  );
}

export function SubText({ children, className = "text-center" }: TextProps) {
  return (
    <p className={`max-w-3xl mx-auto text-lg  text-white/50 ${className}`}>
      {children}
    </p>
  );
}
