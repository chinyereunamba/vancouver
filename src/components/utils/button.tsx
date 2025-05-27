import React from "react";

type ButtonProps = {
    children: React.ReactNode
};
export default function Button({ children }: ButtonProps) {
  return <button className="p-4 cursor-pointer">{children}</button>;
}
