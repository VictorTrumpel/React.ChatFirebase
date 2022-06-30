import { store } from "./store";

export const getFirstActiveMessage = () =>
  store.getState().messageReducer.firstActiveMessage;

export const getHistoryMessages = () =>
  store.getState().messageReducer.historyMessage;
