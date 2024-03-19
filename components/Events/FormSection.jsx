import React from "react";
import ImageNext from "../atoms/ImageNext";
import Form from "../Form";

const FormSection = () => {
  return (
    <div className="w-full flex flex-col pb-6 gap-6">
      <div className="flex justify-between">
        <div className="w-1/4 h-fit">
          <ImageNext src={"/Events/manos.png"} width={500} height={500} />
        </div>
        <div className="w-1/2 pt-6">
          <Form />
        </div>
      </div>
      <div className="px-6">
        <p className="text-xl">Let's talk!</p>
        <p className="w-4/6">
          Con años de experiencia en el mundo del marketing, en MarketLogic nos
          dedicamos a visibilizar y potenciar a las empresas que necesitan abrir
          su horizonte comercial. Buscamos oportunidades para que seas un líder
          tecnológico
        </p>
      </div>
    </div>
  );
};

export default FormSection;
