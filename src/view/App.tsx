import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import LeftNavigator from "./component/LeftNavigator";
import RightBidderList from "./component/RightBidderList";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import UserService from "../service/UserService";
import { useUser } from "../context/UserContext";

interface AppProps {
  children: any;
  id: number;
}

const App = (props: AppProps) => {
  const userService = UserService.getInstance();
  const navigate = useNavigate();
  const anchorWallet = useAnchorWallet();
  const location = useLocation();

  const { connected, connecting, disconnecting } = useWallet();

  useEffect(() => {
    console.log("Connecting:", connecting);
    if (location.pathname == "/welcome") return;
    if (disconnecting) navigate("/welcome");
    console.log("Wallet connection: ", connected);
    if (!connected) return;
    if (!anchorWallet) {
      console.log("Wallet is not connected");
      navigate("/welcome");
    }
  }, [connected, connecting, disconnecting]);

  const { isUserInit } = useUser();

  useEffect(() => {
    // console.log(timeoutEvent);
    const start = async () => {
      userService.wallet = anchorWallet;
      // console.log(anchorWallet);
    };
    start();
  }, [anchorWallet]);

  useEffect(() => {
    console.log("User init: ", isUserInit);
    if (isUserInit == undefined) return;
    if (!isUserInit) navigate("/create_user");
  }, [isUserInit, anchorWallet]);

  return (
    <div className="h-full flex justify-between w-full">
      <LeftNavigator id={props.id} />
      <div className="h-full min-h-screen w-full bg-zinc-100">
        {props.children}
      </div>
      <RightBidderList />
    </div>
  );
};

export default App;
