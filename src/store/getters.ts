import { store } from "./store";

export const getLastActiveMessage = () =>
  store.getState().chatReducer.lastActiveMessage;

export const getHistoryMessages = () =>
  store.getState().chatReducer.historyMessage;
