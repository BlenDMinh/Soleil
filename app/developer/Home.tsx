import UserService from "../../service/UserService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountInfo from "../component/AccountInfo";
import TestPlace from "../component/TestPlace";
import * as Icon from "react-icons/hi2";
import WalletButton from "../component/WalletButton";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

function Home() {
  const userService = UserService.getInstance();
  const navigate = useNavigate();

  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("");

  const anchorWallet = useAnchorWallet();

  useEffect(() => {
    userService.wallet = anchorWallet;
    if (!userService.wallet) {
      navigate("/welcome");
    }
  }, [anchorWallet]);
  return (
    <div className="h-full w-full flex flex-col items-center bg-zinc-100 p-20 gap-10">
      <div className="mb-10 flex flex-row items-center gap-5 w-full">
        <div className="text-4xl font-bold tex-slate-600">Hello</div>
        {nameEditing ? (
          <form
            onSubmit={() => {
              userService.saveName(name);
              setNameEditing(false);
            }}
          >
            <input
              className="text-4xl text-purple-600 font-bold border-2 border-purple-600 p-2"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </form>
        ) : (
          <div className="flex flex-row gap-5">
            <div className="text-4xl font-bold text-purple-600">
              {userService.name ?? "Anonymous"}
            </div>
            <button
              className="text-xl text-slate-400 hover:text-purple-600 transition"
              onClick={() => {
                setName(userService.name ?? "Anonymous");
                setNameEditing(true);
              }}
            >
              <Icon.HiPencilSquare />
            </button>
          </div>
        )}
      </div>
      <WalletButton />
      <AccountInfo />
      <TestPlace />
      {/* <div className="mt-10 flex flex-row w-full justify-between items-center">
        <div></div>
        <button
          className="w-2/5 bg-purple-600 rounded-full p-5 flex items-center justify-center text-lg text-white font-bold"
          onClick={() => {
            userService.removeKeypair();
            navigate("/welcome");
          }}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
}

export default Home;
