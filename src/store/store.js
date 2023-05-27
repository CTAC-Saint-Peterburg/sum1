import { configureStore } from "@reduxjs/toolkit";
import pageControlSlice from "./pageControlSlice";

export const store = configureStore({
  reducer: {
    control: pageControlSlice,
  },
});
