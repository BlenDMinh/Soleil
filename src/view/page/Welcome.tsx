import { useEffect } from "react";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import WalletButton from "../component/WalletButton";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import App from "../App";

const Welcome = () => {
  const navigate = useNavigate();

  const anchorWallet = useAnchorWallet();
  const userService = UserService.getInstance();

  useEffect(() => {
    userService.wallet = anchorWallet;
    if (userService.wallet) {
      navigate("/");
    }
  }, [anchorWallet]);

  return (
    <App id={-1}>
      <div className="bg-zinc-100 w-full h-screen flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg w-fit h-fit shadow-lg flex flex-col items-center p-20 gap-10">
          <div className="text-5xl font-bold">Welcome to Soleil</div>
          <div className="text-2xl">
            It seems that you haven't connected to your wallet yet
          </div>
          <WalletButton />
        </div>
      </div>
    </App>
  );
};

export default Welcome;
