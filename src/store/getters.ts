import { store } from "./store";

export const getLastActiveMessage = () =>
  store.getState().messageReducer.lastActiveMessage;

export const getHistoryMessages = () =>
  store.getState().messageReducer.historyMessage;
