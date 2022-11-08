import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

function initStore() {
  return configureStore({ reducer });
}

export default initStore;
