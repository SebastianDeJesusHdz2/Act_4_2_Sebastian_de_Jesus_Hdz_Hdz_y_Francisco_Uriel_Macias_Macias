import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Navegator from "../components/Navegator";
import "./MainLayout.css";

//export default function MainLayout() {
//   return (
//     <div className="layout">

//       {/* Sidebar */}
//       {/* <SideNav /> */}

//       <div className="layout-main">
//         <Header onBuscar={() => {}} onMenu={() => {}} onUsuario={() => {}} />

//         <main className="layout-content">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );

export default function MainLayout() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

  return (
    <div className="layout">
      {menuAbierto && (
        <div className="layout-overlay" onClick={() => setMenuAbierto(false)} />
      )}

      <Navegator abierto={menuAbierto} onClose={() => setMenuAbierto(false)} />

      <div className="layout-main">
        <Header
          onBuscar={() => {}}
          onMenu={() => setMenuAbierto(!menuAbierto)}
          onUsuario={() => navigate("/")}
        />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
