import { useEffect, useState } from "react";
import SolanaService from "../../service/SolanaService";
import UserService from "../../service/UserService";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "react-activity/dist/library.css";
import { Spinner } from "react-activity";
import { Divider } from "@fluentui/react-divider";

const AccountInfo = () => {
  const userService = UserService.getInstance();
  const solanaService = SolanaService.getInstance();
  const [balance, setBalance] = useState(-1);
  useEffect(() => {
    userService.getBalance().then((balance) => {
      setBalance(balance);
    });
  }, []);
  if (!userService.wallet) return <div></div>;
  return (
    <div className="bg-white shadow-xl rounded-lg w-full h-fit p-10 flex flex-col justify-between gap-5">
      <div className="text-lg h-1/3 text-slate-600 font-bold">Account info</div>
      <Divider
        style={{
          alignSelf: "center",
          color: "#F5F5F5",
          width: "95%",
        }}
      />
      <div className="flex flex-row h-1/3 gap-5 items-center justify-between">
        <div className="text-lg">Your balance:</div>
        {balance == -1 ? (
          <Spinner />
        ) : (
          <div className="text-lg font-bold text-purple-600">
            {balance / LAMPORTS_PER_SOL + " SOL"}
          </div>
        )}
      </div>
      <Divider
        style={{
          alignSelf: "center",
          color: "#F5F5F5",
          width: "95%",
        }}
      />
      <a
        className="h-1/3 text-lg font-bold text-purple-600"
        href={solanaService.getURL(userService.wallet!.publicKey)}
      >
        View your Solana Account
      </a>
    </div>
  );
};

export default AccountInfo;
