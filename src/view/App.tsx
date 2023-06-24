import { useAnchorWallet } from "@solana/wallet-adapter-react";
import LeftNavigator from "./component/LeftNavigator";
import RightBidderList from "./component/RightBidderList";
import { useEffect } from "react";
import { useNavigate } from "react-router";
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

  const { isUserInit } = useUser();

  useEffect(() => {
    const start = async () => {
      userService.wallet = anchorWallet;
      if (!anchorWallet) navigate("/welcome");
    };
    start();
  }, [anchorWallet]);

  useEffect(() => {
    console.log("User init: ", isUserInit);
    if (isUserInit == undefined) return;
    if (!isUserInit) navigate("/create_user");
  }, [isUserInit, anchorWallet]);

  return (
    <div className="h-full flex justify-start w-full">
      <LeftNavigator id={props.id} />
      <div className="h-full min-h-screen w-full bg-zinc-100">
        {props.children}
      </div>
      <RightBidderList />
    </div>
  );
};

export default App;
