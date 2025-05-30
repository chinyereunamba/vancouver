import React from "react";
import Logo from "./Logo";
import { Button } from "./utils/Button";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center mx-auto max-w-7xl h-16 mt-8">
      <div className="logo">
        <Logo />
      </div>
      <ul className="flex gap-4">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
      </ul>

      <div className="space-x-2">
        <Button variant={"ghost"}>Sign In</Button>
        <Button>Request Demo</Button>
      </div>
    </nav>
  );
}
