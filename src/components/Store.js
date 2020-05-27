import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import { products } from "./data";

const Store = () => {
  const [icon, setIcon] = useState("view_list");

  const onSwitch = () => {
    if (icon === "view_module") {
      setIcon("view_list");
    } else {
      setIcon("view_module");
    }
  };

  console.log(icon);

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />

      {icon === "view_list" && <ListView cards={products} />}
      {icon === "view_module" && <CardsView cards={products} />}
    </>
  );
};

export default Store;
