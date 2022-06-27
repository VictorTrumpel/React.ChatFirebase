import React from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { BaseLayout } from "./layouts/BaseLayout";

function App() {
  return (
    <BaseLayout>
      <AppRouter />
    </BaseLayout>
  );
}

export default App;
