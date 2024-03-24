import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Broucher from "./components/Broucher";
import "./App.css";
import Home from "./page/Home";
import HFhackathon from "./page/HFhackathon";
import Page404 from "./page/Page404";
import Contact from "./page/Contact";
import Socials from "./page/Socials";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hackathon/",
    element: <HFhackathon />,
  },
  {
    path: "/Broucher/",
    element: <Broucher />,
  },
  {
    path: "/Contact/",
    element: <Contact />,
  },
  {
    path: "/Socials/",
    element: <Socials />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
