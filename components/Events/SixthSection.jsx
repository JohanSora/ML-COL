import { Button } from "@nextui-org/react";
import React from "react";

const SixthSection = () => {
  return (
    <div className="w-full flex flex-col justify-center py-6 bg-orange items-center text-white gap-6">
      <h2 className="text-3xl text-center font-bold">
        ¡Ahorra tiempo! <br /> Conoce nuestras experiencias preestablecidas
      </h2>
      <p className="text-3xl">Planes listos para replicar y disfrutar</p>
      <Button
        size="lg"
        radius="lg"
        className="bg-white text-orange text-5xl font-bold !py-10"
      >
        Descúbrelas todas
      </Button>
    </div>
  );
};

export default SixthSection;
