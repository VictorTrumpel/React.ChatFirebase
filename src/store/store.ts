import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { urlReducer } from "./reducers/urlSlice";
import { messageReducer } from "./reducers/messageSlice";

export const store = configureStore({
  reducer: { urlReducer, messageReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
