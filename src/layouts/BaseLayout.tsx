import { Navbar } from "../components/Navbar";
import React, { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
