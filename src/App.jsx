import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import "./App.css";

export default function App() {
  return (
    <div id="mainContainer">
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
