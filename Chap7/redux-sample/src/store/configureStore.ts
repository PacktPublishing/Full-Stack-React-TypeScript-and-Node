import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./AppState";

const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;
