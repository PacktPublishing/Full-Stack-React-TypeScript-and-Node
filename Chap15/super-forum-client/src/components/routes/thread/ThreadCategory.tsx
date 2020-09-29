import React, { FC } from "react";
import "react-dropdown/style.css";
import Category from "../../../models/Category";
import CategoryDropDown from "../../CategoryDropDown";

interface ThreadCategoryProps {
  category?: Category;
  sendOutSelectedCategory: (cat: Category) => void;
}

const ThreadCategory: FC<ThreadCategoryProps> = ({
  category,
  sendOutSelectedCategory,
}) => {
  return (
    <div className="thread-category-container">
      <strong>{category?.name}</strong>
      <div style={{ marginTop: "1em" }}>
        <CategoryDropDown
          preselectedCategory={category}
          sendOutSelectedCategory={sendOutSelectedCategory}
        />
      </div>
    </div>
  );
};

export default ThreadCategory;
