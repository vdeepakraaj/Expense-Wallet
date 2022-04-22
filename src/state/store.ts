import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/root-reducer";

const createStore = () => {
  const isDev = true;

  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
  });

  return store;
};
const store = createStore();

export default store;
