// main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";
import { register } from "swiper/element/bundle";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/Error";
import Forms from "./pages/Forms";
import Services from "./pages/Services";
import Therapy from "./pages/Therapy";
import Gallery from "./pages/Gallery";
import SpeechTherapy from "./pages/Therapy/SpeechTherapy";
import OccupationalTherapy from "./pages/Therapy/OccupationalTherapy";
import PhysicalTherapy from "./pages/Therapy/PhysicalTherapy";
import Therapists from "./pages/Therapists";
import Staff from "./pages/Staff";
import SLP from "./pages/Therapists/SLP";
import OT from "./pages/Therapists/OT";
import SchoolHome from "./pages/School/SchoolHome";

register(); // register Swiper components

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
        path: "/staff",
        element: <Staff />,
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
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/school",
        element: <SchoolHome />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
