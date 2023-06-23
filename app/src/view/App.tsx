import { useAnchorWallet } from "@solana/wallet-adapter-react";
import LeftNavigator from "./component/LeftNavigator";
import RightBidderList from "./component/RightBidderList";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import UserService from "../service/UserService";

interface AppProps {
  children: any;
  id: number;
}

const App = (props: AppProps) => {
  const userService = UserService.getInstance();
  const navigate = useNavigate();
  const anchorWallet = useAnchorWallet();

  useEffect(() => {
    userService.wallet = anchorWallet;
    if (!userService.wallet) {
      navigate("/welcome");
    }
  }, [anchorWallet]);
  return (
    <div className="h-full flex justify-start w-full">
      <LeftNavigator id={props.id} />
      <div className="h-full w-full bg-zinc-100">{props.children}</div>
      <RightBidderList></RightBidderList>
    </div>
  );
};

export default App;
