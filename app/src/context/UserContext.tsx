import { createContext, useContext, useEffect, useMemo, useState } from "react";
import idl from "../idl/solei.json";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { SystemProgram } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { User } from "../model/User";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }

  return context;
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new AnchorProvider(
        connection,
        anchorWallet,
        AnchorProvider.defaultOptions()
      );
      return new Program(idl as Idl, idl.metadata.address, provider);
    }
  }, [connection, anchorWallet]);

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
          console.log(user);
        } catch (e) {
          console.log("User not found", e);
        } finally {
        }
      }
    };

    start().catch((e) => {
      console.log(e);
    });
  }, [connection, anchorWallet]);

  const createUser = async (name: string, avatar: string) => {
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
      console.log(call);
      call.rpc();
    }
  };

  const editUser = async (name: string, avatar: string) => {
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
      console.log(pda, publicKey, SystemProgram.programId, name, avatar);
      console.log(call);
      call.rpc();
    }
  };

  return (
    <UserContext.Provider value={{ user, createUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};
