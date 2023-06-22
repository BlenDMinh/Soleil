import { useState } from "react";
import "react-activity/dist/library.css";
import { Spinner } from "react-activity";
import UserService from "../../../service/UserService";

const AirdropTest = () => {
  const [airdropSol, setAirdropSol] = useState(0);
  const [airdropOut, setAirdropOut] = useState("Function output");
  return (
    <div className="w-full h-fit flex flex-col justify-between gap-5">
      <div className="text-lg text-slate-500 font-bold">Airdrop</div>
      <div className="flex gap-10 items-center">
        <button
          className="border-2 border-purple-600 p-2 rounded-lg bg-purple-600 text-lg text-white font-bold hover:text-purple-600 hover:bg-inherit"
          onClick={() => {
            setAirdropOut("");
            if (airdropSol <= 0) return;
            UserService.getInstance()
              .requestAirdrop(airdropSol)
              .then((response) => {
                setAirdropOut("Slot: " + response.context.slot.toString());
              })
              .catch((e) => {
                setAirdropOut("Error: " + e.toString());
              });
          }}
        >
          Airdrop
        </button>
        <input
          className="border-purple-600 border-2 rounded p-2 w-20"
          type="number"
          value={airdropSol.toString()}
          onChange={(e) => {
            setAirdropSol(Math.max(0, Number.parseInt(e.target.value)));
          }}
        />
        <div>SOL</div>
      </div>
      <div className="border-2 border-purple-600 rounded p-2 w-full h-fit font-mono">
        {airdropOut.length < 1 ? <Spinner></Spinner> : airdropOut}
      </div>
    </div>
  );
};

export default AirdropTest;
