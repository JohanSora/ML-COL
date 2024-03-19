import React from "react";
import ImageNext from "./atoms/ImageNext";

const Footer = () => {
  return (
    <div className="w-full bg-gray flex justify-between p-6 text-white">
      <div className="flex gap-6">
        <div className="max-h-[121px]">
          <ImageNext src={"/logo_white.png"} width={500} height={500} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-2xl">
            <strong>
              <span className="text-orange">Let’s </span>Make
            </strong>{" "}
            <span className="text-orange">it Happen</span>
          </p>
          {/* <p className="text-sm">
            Politica de privacidad Sé un MarketLover Contacto
          </p> */}
          <hr className="text-orange" />
          <p className="text-sm">MarketLogic © Copyright 2024</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <p>Síguenos</p>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/mymarketlogic/" className="h-fit">
            <ImageNext src={"/face.png"} width={60} height={60} />
          </a>
          <a
            href="https://www.linkedin.com/company/marketlogic/mycompany/"
            className="h-min"
          >
            <ImageNext src={"/linke.png"} width={60} height={60} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
