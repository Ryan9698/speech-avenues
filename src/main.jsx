// main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import Therapy from "./pages/Therapy";
import SpeechTherapy from "./pages/Therapy/SpeechTherapy";
import OccupationalTherapy from "./pages/Therapy/OccupationalTherapy";
import PhysicalTherapy from "./pages/Therapy/PhysicalTherapy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/therapy",
        element: <Therapy />,
        children: [
          {
            path: "speechtherapy",
            element: <SpeechTherapy />,
          },
          {
            path: "occupationaltherapy",
            element: <OccupationalTherapy />,
          },
          {
            path: "physicaltherapy",
            element: <PhysicalTherapy />,
          },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
