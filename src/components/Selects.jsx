import React from "react";

import Select1 from "../assets/1.jpg";
import Select2 from "../assets/2.jpg";
import Select3 from "../assets/3.jpg";
import Select4 from "../assets/4.jpg";
import Select5 from "../assets/5.jpg";
import Select6 from "../assets/6.jpg";
import SelectItem from "./SelectItem";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectItem bg={Select1} text="Maldives" />
      <SelectItem bg={Select2} text="Antigua" />
      <SelectItem bg={Select3} text="Corenthia" />
      <SelectItem bg={Select4} text="Cozumel" />
      <SelectItem bg={Select5} text="Canada" />
      <SelectItem bg={Select6} text="Pyramids" />
    </div>
  );
};

export default Selects;
