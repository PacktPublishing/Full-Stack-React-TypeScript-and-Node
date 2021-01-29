import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { PostReducer } from "./PostReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer
});

export type AppState = ReturnType<typeof rootReducer>;
