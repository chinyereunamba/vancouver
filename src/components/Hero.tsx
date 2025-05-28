import { Button } from "./utils/button";
import heroImg from "../assets/Product.jpg";
import featureImg1 from "../assets/Logo01.svg";
import HeroText, { SubText } from "./utils/HeroText";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto my-16 text-center">
      <div className=" ">
        <HeroText>
          <span className="bg-gradient-to-r from-[#DEC880] via-[#FF347D] to-[#827DED] bg-clip-text text-transparent">
            Tailormade
          </span>{" "}
          to Manage all your Data registers
        </HeroText>
        <SubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At etiam
          tellus aliquet risus, odio vitae cras viverra elementum.
        </SubText>
      </div>
      <div className="flex gap-4 justify-center py-12">
        <Button>Request a demo</Button>
        <Button variant={'outline'}>Learn More</Button>
      </div>
      <div>
        <img src={featureImg1.src} />
        <img src={heroImg.src} />
      </div>
    </div>
  );
}
