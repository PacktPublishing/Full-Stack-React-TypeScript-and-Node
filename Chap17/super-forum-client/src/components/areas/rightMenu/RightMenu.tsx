import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import TopCategory from "./TopCategory";
import groupBy from "lodash/groupBy";
import "./RightMenu.css";
import { gql, useQuery } from "@apollo/client";

const GetTopCategoryThread = gql`
  query getTopCategoryThread {
    getTopCategoryThread {
      threadId
      categoryId
      categoryName
      title
    }
  }
`;

const RightMenu = () => {
  const { data: categoryThreadData } = useQuery(GetTopCategoryThread);
  const { width } = useWindowDimensions();
  const [topCategories, setTopCategories] = useState<
    Array<JSX.Element> | undefined
  >();

  useEffect(() => {
    if (categoryThreadData && categoryThreadData.getTopCategoryThread) {
      const topCatThreads = groupBy(
        categoryThreadData.getTopCategoryThread,
        "categoryName"
      );
      const topElements = [];
      for (let key in topCatThreads) {
        const currentTop = topCatThreads[key];
        topElements.push(<TopCategory key={key} topCategories={currentTop} />);
      }
      setTopCategories(topElements);
    }
  }, [categoryThreadData]);

  if (width <= 768) {
    return null;
  }
  return <div className="rightmenu rightmenu-container">{topCategories}</div>;
};

export default RightMenu;
