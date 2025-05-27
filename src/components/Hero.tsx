import Button from "./utils/button";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto my-16 text-center">
      <div className=" ">
        <h1 className="text-6xl text-center font-semibold leading-18 py-5 max-w-4xl w-full  mx-auto">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-700 mask-auto ">
            Tailormade
          </span>{" "}
          to Manage all your Data registers
        </h1>
        <p className="max-w-3xl  mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At etiam
          tellus aliquet risus, odio vitae cras viverra elementum.
        </p>
      </div>
      <div className="flex gap-4 justify-center py-12">
        <Button>Request a demo</Button>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
