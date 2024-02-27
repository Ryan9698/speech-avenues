// main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import Forms from "./pages/Forms";
import Services from "./pages/Services";
import Therapy from "./pages/Therapy";
import SpeechTherapy from "./pages/Therapy/SpeechTherapy";
import OccupationalTherapy from "./pages/Therapy/OccupationalTherapy";
import PhysicalTherapy from "./pages/Therapy/PhysicalTherapy";
import Therapists from "./pages/Therapists";
import SLP from "./pages/Therapists/SLP";
import OT from "./pages/Therapists/OT";

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
        path: "/forms",
        element: <Forms />,
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
      {
        path: "/therapists",
        element: <Therapists />,
        children: [
          {
            path: "slp",
            element: <SLP />,
          },
          {
            path: "ot",
            element: <OT />,
          },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
