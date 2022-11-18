import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Api";
import reducer from "./reducer";

function initStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      Api.middleware,
    ],
  });
}

export default initStore;
