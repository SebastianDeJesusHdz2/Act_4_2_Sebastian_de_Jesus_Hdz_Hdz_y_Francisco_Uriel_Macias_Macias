import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Login } from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cronograma from "../pages/Cronograma/Cronograma";
import RegistroAvance from "../pages/Registro/Registro";
import Materias from "../pages/Materias/Materias";

// Layout
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Ruta pública */}
        <Route path="/" element={<Login />} />

        {/* Rutas con layout (SideNav + estructura) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/registro-avance" element={<RegistroAvance />} />
          <Route path="/materias" element={<Materias />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}