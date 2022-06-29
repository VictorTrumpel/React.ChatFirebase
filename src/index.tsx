import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { FireBase } from "./firebase/FireBase";
import { Browser } from "./components/Browser";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Browser>
      <FireBase>
        <App />
      </FireBase>
    </Browser>
  </Provider>
);
