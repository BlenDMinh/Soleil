import { useState } from "react";
import App from "../App";
import { createAvatar } from "@dicebear/core";
import { adventurer, personas } from "@dicebear/collection";
import { useWallet } from "@solana/wallet-adapter-react";
import nameGenerator from "@afuggini/namegenerator";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router";

function avatar_rand(seed: string = "") {
  const avatar_img = createAvatar(personas, {
    seed: seed,
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
    backgroundType: ["gradientLinear", "solid"],
  });
  return avatar_img;
}

const CreateUser = () => {
  const { publicKey } = useWallet();

  const time_seed = new Date().toISOString();

  const avatar_img = avatar_rand((publicKey?.toBase58() ?? "") + time_seed);

  const [name, setName] = useState("Anonymous");
  const [avatar, setAvatar] = useState(avatar_img.toDataUriSync());

  const { createUser } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <App id={-1}>
        <div className="rounded-lg bg-white shadow-xl h-full flex flex-col justify-center p-10 m-10 gap-10">
          <div className="font-bold text-3xl">Create your account</div>
          <div className="flex flex-row w-full gap-10">
            <div className="flex flex-col w-1/4 items-center gap-5">
              <img className="rounded-full p-2 border-2" src={avatar} alt="" />
              <div className="text-2xl font-bold">{name}</div>
            </div>
            <div className="flex flex-col w-full">
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
                      const avatar_img = avatar_rand(
                        (publicKey?.toBase58() ?? "") + time_seed
                      );
                      setAvatar(avatar_img.toDataUriSync());
                    }}
                  >
                    Random
                  </button>
                </div>
                <button
                  className="bg-purple-700 border-2 border-purple-700 font-sans rounded-lg shadow-purple-300 text-white font-bold w-1/4 justify-center items-center flex p-2 transition hover:bg-white hover:text-purple-600"
                  onClick={() => {
                    createUser(name, avatar).then(() => {
                      navigate("/");
                    });
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </App>
    </>
  );
};

export default CreateUser;
