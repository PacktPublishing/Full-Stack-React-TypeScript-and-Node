import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const RightMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="rightmenu">Righ Menu</div>;
};

export default RightMenu;
