import React, { FC } from "react";
import "react-dropdown/style.css";
import Category from "../../../models/Category";
import CategoryDropDown from "../../CategoryDropDown";

interface ThreadCategoryProps {
  categoryName?: string;
}

const ThreadCategory: FC<ThreadCategoryProps> = ({ categoryName }) => {
  const sendOutSelectedCategory = (cat: Category) => {
    console.log("selected category", cat);
  };

  return (
    <div className="thread-category-container">
      <strong>{categoryName}</strong>
      <div style={{ marginTop: "1em" }}>
        <CategoryDropDown sendOutSelectedCategory={sendOutSelectedCategory} />
      </div>
    </div>
  );
};

export default ThreadCategory;
