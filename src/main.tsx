import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/page/Home.tsx";
import Welcome from "./view/page/Welcome.tsx";
import { WalletContext } from "./view/component/WalletButton.tsx";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WalletContext>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </WalletContext>
);
