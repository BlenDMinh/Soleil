import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dev from "./view/page/Dev.tsx";
import Welcome from "./view/page/Welcome.tsx";
import { WalletContext } from "./view/component/WalletButton.tsx";
import Auction from "./view/page/Auction.tsx";
import Home from "./view/page/Home.tsx";
import Donate from "./view/page/Donate.tsx";
import Create from "./view/page/Create.tsx";
import Help from "./view/page/Help.tsx";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auction",
    element: <Auction />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WalletContext>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </WalletContext>
);
