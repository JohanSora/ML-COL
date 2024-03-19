"use client";
import React, { useEffect } from "react";

const Form = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script><script>hbspt.forms.create({region: "na1",portalId: "20209541",formId: "7d0c7687-836a-4008-b2cf-5aad610fc933"});</script>',
      }}
      className="w-full"
    ></div>
  );
};

export default Form;
