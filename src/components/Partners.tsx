import React from "react";
import logo1 from "../assets/Logo01.svg";
import logo2 from "../assets/Logo02.svg";
import logo3 from "../assets/Logo03.svg";
import logo4 from "../assets/Logo04.svg";
import logo5 from "../assets/Logo05.svg";
import logo6 from "../assets/Logo06.svg";
import logo7 from "../assets/Logo07.svg";
import logo10 from "../assets/Logo10.svg";
import { SubText } from "./utils/HeroText";

export default function Partners() {
  const logos = [
    {
      id: 1,
      logo: logo1,
    },
    {
      id: 2,
      logo: logo2,
    },
    {
      id: 3,
      logo: logo3,
    },
    {
      id: 4,
      logo: logo4,
    },
    {
      id: 5,
      logo: logo5,
    },
    {
      id: 6,
      logo: logo6,
    },
    {
      id: 7,
      logo: logo7,
    },

    {
      id: 10,
      logo: logo10,
    },
  ];
  return (
    <div className="space-y-12 max-w-7xl mx-auto py-5">
      <div className="flex gap-4 justify-between">
        {logos.map((logo) => (
          <img key={logo.id} src={logo.logo.src} />
        ))}
      </div>
      <SubText>Trusted by Top-tier product companies</SubText>
    </div>
  );
}
