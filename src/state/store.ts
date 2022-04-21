import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducer/root-reducer";

const createStore = () => {
  const isDev = true;
  const middleware = [];

  middleware.push(thunk);

  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
    middleware: middleware,
  });

  return store;
};
const store = createStore();

export default store;
