import nameGenerator from "@afuggini/namegenerator";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC, useEffect, useState } from "react";

function avatar_rand(seed: string = "") {
  return `https://api.dicebear.com/6.x/personas/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear,solid`;
}

const ProfileForm: FC<{
  currentName?: string;
  currentAvatar?: string;
  onSubmit?: (name: string, avatar: string) => void;
}> = ({ currentName, currentAvatar, onSubmit }) => {
  const { publicKey } = useWallet();
  const time_seed = new Date().toISOString();
  const [name, setName] = useState(currentName ?? "Anonymous");
  const [avatar, setAvatar] = useState(
    currentAvatar ?? avatar_rand((publicKey?.toBase58() ?? "") + time_seed)
  );

  useEffect(() => {
    setName(currentName ?? "Anonymous");
    setAvatar(
      currentAvatar ?? avatar_rand((publicKey?.toBase58() ?? "") + time_seed)
    );
  }, [currentName, currentAvatar]);

  return (
    <div className="flex flex-row w-full gap-10">
      <div className="flex flex-col w-1/3 items-center gap-5">
        <img className="rounded-full p-2 border-2" src={avatar} alt="" />
        <div className="text-2xl font-bold">{name}</div>
      </div>
      <div className="flex flex-col w-2/3">
        <div className="flex flex-col gap-5">
          <div className="text-xl">Name:</div>
          <div className="flex flex-row gap-5">
            <input
              className="text-xl border-2 border-purple-700 p-2 rounded-lg w-3/4"
              type="text"
              placeholder="Anonymous"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="bg-purple-700 border-2 border-purple-700 font-sans rounded-lg shadow-purple-300 text-white font-bold w-1/4 justify-center items-center flex p-2 transition hover:bg-white hover:text-purple-600"
              onClick={() => {
                setName(nameGenerator(" "));
              }}
            >
              Random
            </button>
          </div>
          <div className="text-xl">Avatar URL:</div>
          <div className="flex flex-row gap-5">
            <input
              className="text-xl border-2 border-purple-700 p-2 rounded-lg w-3/4"
              type="text"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <button
              className="bg-purple-700 border-2 border-purple-700 font-sans rounded-lg shadow-purple-300 text-white font-bold w-1/4 justify-center items-center flex p-2 transition hover:bg-white hover:text-purple-600"
              onClick={() => {
                const time_seed = new Date().toISOString();
                setAvatar(
                  avatar_rand((publicKey?.toBase58() ?? "") + time_seed)
                );
              }}
            >
              Random
            </button>
          </div>
          <button
            className="bg-purple-700 border-2 border-purple-700 font-sans rounded-lg shadow-purple-300 text-white font-bold w-1/4 justify-center items-center flex p-2 transition hover:bg-white hover:text-purple-600"
            onClick={() => {
              if (onSubmit) onSubmit.call(this, name, avatar);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
