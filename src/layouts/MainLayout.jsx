import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './MainLayout.css'


export default function MainLayout() {
  return (
    <div className="layout">

      {/* Sidebar */}
      {/* <SideNav /> */}

      <div className="layout-main">
        <Header onBuscar={() => {}} onMenu={() => {}} onUsuario={() => {}} />

        <main className="layout-content">
          <Outlet />
        </main>

        <Footer onInicio={() => {}} onCheck={() => {}} onUsuario={() => {}} />
      </div>
    </div>
  );
}