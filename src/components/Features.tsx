import React from "react";
import { SectionText, SubText } from "./utils/HeroText";
import featureImg1 from "../assets/Feature Image 01.svg";
import featureImg2 from "../assets/Feature Image 02.svg";

export default function Features() {
  const features = [
    {
      id: 1,
      intro: "Top Management, to help you see the bigger picture.",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis ipsa quos ea quibusdam perspiciatis.",
          subP: " Lorem ipsum dolor sit amet.",
      img: featureImg1
    },
    {
      id: 1,
      intro: "See the problem from first layer.",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis ipsa quos ea quibusdam perspiciatis.",
          subP: " Lorem ipsum dolor sit amet.",
      img: featureImg2
    },
  ];
  return (
    <section className="max-w-7xl mx-auto text-center">
      <SectionText>
        We can help you to manage from top to bottom, all layers
      </SectionText>
      <SubText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos modi sed
        maxime expedita, possimus fugit quas eligendi.
      </SubText>
      <section className="py-16 space-y-5">
        {features.map((item) => (
          <div className="flex justify-between even:flex-row-reverse items-center py-12" key={item.id}>
            <div className="md:w-3/6 text-left">
              <h3 className="text-4xl font-semibold py-4">{item.intro}</h3>
              <SubText className="!text-left">{item.p}</SubText>
              <SubText className="!text-left pt-4">{item.subP}</SubText>
            </div>
            <div className="">
              <img src={item.img.src} />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
