import { Button } from "@nextui-org/react";
import React from "react";
import ImageNext from "../atoms/ImageNext";

const FirstSection = () => {
  return (
    <div className="w-full flex justify-between py-6 px-12 bg-light-gray">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="lg:text-7xl 2xl:text-8xl font-bold text-gray">
            Experiencias <br /> que cautivan
          </h1>
          <p className="text-4xl">De espectador a protagonista</p>
        </div>
        <div>
          <Button
            size="lg"
            radius="sm"
            className="bg-orange text-white text-3xl !py-6 font-bold"
          >
            Creemos tu evento
          </Button>
        </div>
      </div>
      <div className="w-1/3 max-h-[370px]">
        <ImageNext src={"/caballo.png"} width={500} height={500} />
      </div>
    </div>
  );
};

export default FirstSection;
