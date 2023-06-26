import { createContext, useContext, useEffect, useState } from "react";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { SystemProgram, TransactionResponse } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { User } from "../model/User";
import { useProgram } from "./ProgramContext";

const MAX_PING = 5;

const UserContext = createContext<{
  user?: User;
  createUser: (
    name: string,
    avatar: string
  ) => Promise<TransactionResponse | undefined>;
  editUser: (
    name: string,
    avatar: string
  ) => Promise<TransactionResponse | undefined>;
  isUserInit?: boolean;
  onTrans: boolean;
}>({
  createUser: async () => undefined,
  editUser: async () => undefined,
  onTrans: false,
});

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside UserProvider");
  }

  return context;
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [isUserInit, setUserInit] = useState<boolean | undefined>();

  const [onTrans, setOnTrans] = useState<boolean>(false);

  const { program } = useProgram();

  useEffect(() => {
    const start = async () => {
      if (program && publicKey) {
        try {
          const [pda] = await findProgramAddressSync(
            [utf8.encode("soleil_user"), publicKey.toBuffer()],
            program.programId
          );
          const user = await program.account.userAccount.fetch(pda);
          setUser(user as User);
          console.log("Found user: ", user);
          setUserInit(true);
        } catch (e) {
          setUser(undefined);
          console.log("User not found", e);
          setUserInit(false);
        }
      } else setUser(undefined);
    };

    start().catch((e) => {
      console.log(e);
    });
  }, [connection, anchorWallet, onTrans]);

  const createUser = async (name: string, avatar: string) => {
    setOnTrans(true);
    if (program && publicKey) {
      const [pda] = findProgramAddressSync(
        [utf8.encode("soleil_user"), publicKey.toBuffer()],
        program.programId
      );

      const call = program.methods.createUser(name, avatar).accounts({
        userAccount: pda,
        authority: publicKey,
        systemProgram: SystemProgram.programId,
      });
      console.log(pda, publicKey, SystemProgram.programId, name, avatar);
      return call.rpc().then(async (signature) => {
        for (let time = 0; time < MAX_PING; time++) {
          const trans = await connection.getTransaction(signature);
          if (trans) {
            setOnTrans(false);
            return trans;
          }
        }
        setOnTrans(false);
      });
    }
  };

  const editUser = async (name: string, avatar: string) => {
    setOnTrans(true);
    if (program && publicKey) {
      const [pda] = findProgramAddressSync(
        [utf8.encode("soleil_user"), publicKey.toBuffer()],
        program.programId
      );

      const call = program.methods.editUser(name, avatar).accounts({
        userAccount: pda,
        authority: publicKey,
        systemProgram: SystemProgram.programId,
      });
      return call.rpc().then(async (signature) => {
        for (let time = 0; time < MAX_PING; time++) {
          const trans = await connection.getTransaction(signature);
          if (trans) {
            setOnTrans(false);
            return trans;
          }
        }
        setOnTrans(false);
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, createUser, editUser, isUserInit, onTrans }}
    >
      {children}
    </UserContext.Provider>
  );
};
