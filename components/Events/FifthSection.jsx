import { Button } from "@nextui-org/react";
import React from "react";
import ImageNext from "../atoms/ImageNext";

const FifthSection = () => {
  return (
    <div className="w-full flex pt-6 bg-dark-blue items-center">
      <div className="w-1/2 max-h-[410px]">
        <ImageNext src={"/Events/mac.png"} width={1000} height={1000} />
      </div>
      <div className="text-white w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-bold">
          Conoce nuestra <br /> galería de eventos 360
        </h2>
        <p className="text-lg">
          Tenemos una <strong> gran variedad de eventos</strong> y experiencias
          que lograrán que tu equipo, clientes, aliados y tú,{" "}
          <strong>se sientan como los protagonistas</strong> de la gran historia
          que juntos contaremos.
        </p>
        <Button
          size="lg"
          radius="lg"
          className="bg-white text-dark-blue font-bold w-fit"
        >
          ¡Visita nuestra galería!
        </Button>
      </div>
    </div>
  );
};

export default FifthSection;
