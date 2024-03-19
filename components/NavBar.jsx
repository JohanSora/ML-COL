import React from "react";
import ImageNext from "./atoms/ImageNext";
import { Button } from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="w-full bg-gray flex justify-between p-6 sticky top-0 z-10">
      <div className="w-[250px]">
        <ImageNext src={"/mlLogo.png"} width={500} height={500} />
      </div>
      <Button size="lg" radius="sm" className="bg-white text-orange font-bold">
        Cotiza tu evento
      </Button>
    </div>
  );
};

export default NavBar;