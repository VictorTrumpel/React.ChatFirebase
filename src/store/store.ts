import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pageReducer } from "./reducers/PageSlice";

export const store = configureStore({
  reducer: { pageReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
