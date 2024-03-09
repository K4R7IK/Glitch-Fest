import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Broucher from "./components/Broucher";
import "./App.css";
import Home from "./page/Home";
import HFhackathon from "./page/HFhackathon";
import Page404 from "./page/Page404";

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
    path: "*",
    element: <Page404 />,
  },
]);

function App() {
  return (
     <div className="bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
