import { combineReducers } from "redux";
import { UserProfileReducer } from "./user/Reducer";
import { ThreadCategoriesReducer } from "./categories/Reducer";

export const rootReducer = combineReducers({
  user: UserProfileReducer,
  categories: ThreadCategoriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
