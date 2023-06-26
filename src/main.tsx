import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dev from "./view/page/Dev.tsx";
import Welcome from "./view/page/Welcome.tsx";
import { SoleilWalletProvider } from "./context/SoleilWalletContext.tsx";
import Auction from "./view/page/Auction.tsx";
import Home from "./view/page/Home.tsx";
import Donate from "./view/page/Donate.tsx";
import Create from "./view/page/Create.tsx";
import Help from "./view/page/Help.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import CreateUser from "./view/page/CreateUser.tsx";
import EditProfile from "./view/page/EditProfile.tsx";
import ProgramProvider from "./context/ProgramContext.tsx";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/create_user",
    element: <CreateUser />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/edit",
    element: <EditProfile />,
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
  <SoleilWalletProvider>
    <ProgramProvider>
      <UserProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </UserProvider>
    </ProgramProvider>
  </SoleilWalletProvider>
);
