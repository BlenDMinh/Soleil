import { Keypair } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";

interface WelcomeKeypairProp {
  keypair: Keypair | undefined;
  onClose?: () => void;
}

const WelcomeKeypair = (props: WelcomeKeypairProp) => {
  const [show, setShow] = useState(true);
  return (
    <Modal
      isOpen={props.keypair != undefined && show}
      onRequestClose={() => {
        if (props.onClose != undefined) props.onClose();
      }}
    >
      <div className="bg-slate-500 bg-opacity-50 h-full w-full flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg w-4/5 h-fit shadow-lg flex flex-col items-center p-20 gap-10">
          <div className="text-3xl text-purple-600 font-bold">
            Keypair generated
          </div>
          <div className="text-lg text-slate-600">
            This keypair has been automatically saved in your device's storage.
            You can div or change your keypair later.
          </div>
          <div className="flex flex-row w-full items-center gap-5">
            <div className="text-lg w-1/6 font-bold">Public key:</div>
            <input
              className="text-lg text-purple-900 w-4/5 p-2 border border-purple-600 rounded"
              value={props.keypair?.publicKey.toBase58()}
              readOnly={true}
            />
            <button
              className="w-1/12 bg-purple-600 rounded-full p-2 flex items-center justify-center text-lg text-white font-bold"
              onClick={() => {
                navigator.clipboard.writeText(
                  props.keypair?.publicKey.toBase58() ?? ""
                );
              }}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-row w-full items-center gap-5">
            <div className="text-lg w-1/6 font-bold">Private key:</div>
            <input
              className="text-lg text-purple-900 w-4/5 p-2 border border-purple-600 rounded"
              value={`[${props.keypair?.secretKey.toString()}]`}
              readOnly={true}
              type="password"
            />
            <button
              className="w-1/12 bg-purple-600 rounded-full p-2 flex items-center justify-center text-lg text-white font-bold"
              onClick={() => {
                navigator.clipboard.writeText(
                  `[${props.keypair?.secretKey.toString()}]`
                );
              }}
            >
              Copy
            </button>
          </div>
          <div className="flex-row w-full justify-between">
            <div></div>
            <button
              className="mt-10 w-1/6 bg-purple-600 rounded-full p-2 flex items-center justify-center text-lg text-white font-bold"
              onClick={() => {
                setShow(false);
                if (props.onClose != undefined) props.onClose();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default WelcomeKeypair;
