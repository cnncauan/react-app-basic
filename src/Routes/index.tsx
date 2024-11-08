import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard/Dashboard";
import { Login } from "../Pages/login/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
