import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { dataService } from "../services/DataService";
import Category from "../models/Category";
import "./LeftMenu.css";

const LeftMenu = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    dataService
      .getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (width <= 768) {
    return null;
  }
  return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
