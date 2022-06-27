import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { FireBase } from "./firebase/FireBase";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FireBase>
        <App />
      </FireBase>
    </Provider>
  </React.StrictMode>
);
