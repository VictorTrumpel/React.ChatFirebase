import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { privateRoutes, publicRoutes } from "./routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { FireContext, FireContextType } from "./index";
import { CircularProgress } from "@mui/material";

function App() {
  const { auth } = useContext<FireContextType>(FireContext);
  const [user, loading, error] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Navbar />
      {loading ? (
        <CircularProgress />
      ) : (
        <Routes>
          <Route path="/">{getAppRouter(!!user)}</Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

const getAppRouter = (user: boolean) => {
  if (user) {
    return privateRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ));
  }

  return publicRoutes.map(({ path, Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));
};

export default App;
