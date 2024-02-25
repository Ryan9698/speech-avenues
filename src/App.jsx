import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import "./App.css";

export default function App() {
  return (
    <div id="mainContainer" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
