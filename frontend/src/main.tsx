import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { NAV_ITEMS } from "./constants/navItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: NAV_ITEMS.map(({path, element}) => ({
      path,
      element
    }))
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
