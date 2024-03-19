import React from "react";
import ImageNext from "../atoms/ImageNext";

const FourthSection = () => {
  return (
    <div className="w-full flex flex-col relative">
      <div className="absolute w-[150px]">
        <ImageNext
          src={"/Events/rocket.png"}
          width={300}
          height={300}
          alt={"rocket marketlogic"}
        />
      </div>
      <div className="rounded-lg bg-gray m-6 py-6 px-20 flex text-white gap-6">
        <div>
          <p className="text-4xl font-bold">MARKET</p>
          <p className="text-7xl font-bold text-orange">LAB</p>
          <p className="text-3xl text-center">Experience</p>
        </div>
        <div>
          <p>
            Es un espacio <strong>creativo y dinámico</strong> donde se idean,
            diseñan y ejecutan{" "}
            <strong className="text-orange">
              {" "}
              experiencias únicas y memorables
            </strong>{" "}
            para los asistentes. Aquí fusionamos elementos sensoriales,
            tecnología, arte y entretenimiento para crear{" "}
            <strong>momentos impactantes y significativos.</strong>
          </p>
          <br />
          <p>
            El diferencial del{" "}
            <strong className="text-orange">MarketLab</strong> radica en la
            capacidad de entender el objetivo final de la experiencia para{" "}
            <strong>generar conexiones emocionales</strong> con el público,
            fortaleciendo así la identidad de marca y fomentando la
            participación activa para{" "}
            <strong>construir relaciones sólidas con los participantes.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
