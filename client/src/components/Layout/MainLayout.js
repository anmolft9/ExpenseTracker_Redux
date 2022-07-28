import React from "react";
import { Header } from "./Header";

export const MainLayout = ({ children, isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {children}
    </div>
  );
};
