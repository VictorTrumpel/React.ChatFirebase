import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { urlReducer } from "./reducers/urlSlice";

export const store = configureStore({
  reducer: { urlReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
