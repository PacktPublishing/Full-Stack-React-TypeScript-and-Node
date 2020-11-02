import Category from "../../models/Category";

export const ThreadCategoriesType = "THREAD_CATEGORIES";

export interface ThreadCategoriesAction {
  type: string;
  payload: Array<Category> | null;
}

export const ThreadCategoriesReducer = (
  state: any = null,
  action: ThreadCategoriesAction
): Array<Category> | null => {
  switch (action.type) {
    case ThreadCategoriesType:
      return action.payload;
    default:
      return state;
  }
};
