import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import "react-dropdown/style.css";
import Category from "../models/Category";
import DropDown, { Option } from "react-dropdown";
import { useHistory } from "react-router-dom";

const defaultLabel = "Select a category";
const defaultOption = {
  value: "0",
  label: defaultLabel,
};

class CategoryDropDownProps {
  sendOutSelectedCategory?: (cat: Category) => void;
  navigate?: boolean = false;
  preselectedCategory?: Category;
}

const CategoryDropDown: FC<CategoryDropDownProps> = ({
  sendOutSelectedCategory,
  navigate,
  preselectedCategory,
}) => {
  const categories = useSelector((state: AppState) => state.categories);
  const [categoryOptions, setCategoryOptions] = useState<
    Array<string | Option>
  >([defaultOption]);
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption);
  const history = useHistory();

  useEffect(() => {
    if (categories) {
      const catOptions: Array<Option> = categories.map((cat: Category) => {
        return {
          value: cat.id,
          label: cat.name,
        };
      });
      setCategoryOptions(catOptions);
      setSelectedOption({
        value: preselectedCategory ? preselectedCategory.id : "0",
        label: preselectedCategory ? preselectedCategory.name : defaultLabel,
      });
    }
  }, [categories, preselectedCategory]);

  const onChangeDropDown = (selected: Option) => {
    setSelectedOption(selected);
    if (sendOutSelectedCategory) {
      sendOutSelectedCategory(
        new Category(selected.value, selected.label?.valueOf().toString() ?? "")
      );
    }

    if (navigate) {
      history.push(`/categorythreads/${selected.value}`);
    }
  };

  return (
    <DropDown
      className="thread-category-dropdown"
      options={categoryOptions}
      onChange={onChangeDropDown}
      value={selectedOption}
      placeholder={defaultLabel}
    />
  );
};

export default CategoryDropDown;
