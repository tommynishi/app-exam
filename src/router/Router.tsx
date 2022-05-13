import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
    <Routes>
      <Route
        path="/"
        element={<Login/>} />
      {HomeRoutes.map((route) => (
        
          <Route
            key={route.path}
            path={route.path}
            element={
              <HeaderLayout>
                {route.children}
              </HeaderLayout>
            } />
        
      ))}
      <Route
        path="*"
        element={<Page404 />} />
    </Routes>
    </LoginUserProvider>
  );
});