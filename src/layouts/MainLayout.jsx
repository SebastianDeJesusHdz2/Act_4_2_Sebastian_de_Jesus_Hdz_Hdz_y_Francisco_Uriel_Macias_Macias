import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Navegator from "../components/Navegator";
import './MainLayout.css'


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

  return (
    <div className="layout">

      <Navegator abierto={menuAbierto} />

      <div className="layout-main">
        <Header 
          onBuscar={() => {}} 
          onMenu={() => setMenuAbierto(!menuAbierto)} 
          onUsuario={() => {}} 
        />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}