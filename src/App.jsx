import React from "react";
import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import HFhackathon from "./page/HFhackathon";
import Page404 from "./page/Page404";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Hackathon',
    element: <HFhackathon />,
  },
  {
    path: '/Hackathon/',
    element: <HFhackathon />,
  },
  {
    path: '*',
    element: <Page404 />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; 
