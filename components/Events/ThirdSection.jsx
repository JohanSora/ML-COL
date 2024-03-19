import React from "react";
import ImageNext from "../atoms/ImageNext";
import { Button } from "@nextui-org/react";

const ThirdSection = () => {
  const info = [
    {
      text: "Contamos con 23 años de experiencia en el mercado.",
      img: "/Events/23.png",
    },
    {
      text: "Somos un equipo de +190 expertos localizados en Latinoamérica.",
      img: "/Events/90.png",
    },
    {
      text: "Eventos exitosos realizados en toda la región.",
      img: "/Events/1250.png",
    },
  ];

  return (
    <div className="w-full flex flex-col py-6 bg-dark-yellow items-center gap-12">
      <h2 className="text-2xl font-bold text-gray">
        Razones para creer en nosotros:
      </h2>
      <div className="w-full flex gap-6 justify-center">
        {info.map(({ img, text }, idx) => (
          <div key={idx} className="w-1/4 flex items-center">
            <div className="w-1/4">
              <ImageNext src={img} width={200} height={200} />
            </div>
            <div className="w-3/4">{text}</div>
          </div>
        ))}
      </div>
      <div>
        <Button size="lg" radius="sm" className="bg-white text-black font-bold">
          Cuéntanos lo que estás buscando y hagamos que pase
        </Button>
      </div>
    </div>
  );
};

export default ThirdSection;
