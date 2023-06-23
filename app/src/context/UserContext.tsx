import { createContext, useContext, useEffect, useMemo } from "react";
import idl from "../idl/solei.json";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { SystemProgram } from "@solana/web3.js";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }

  return context;
};

export const UserProvider = ({ children }: any) => {
  const user = {
    name: "Anh Minh",
  };
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
            [
              Uint8Array.from(
                JSON.parse(
                  idl.constants.find((e) => e.name == "USER_SEED")?.value ??
                    "[]"
                )
              ),
              publicKey.toBuffer(),
            ],
            program.programId
          );
          const user = await program.account.userAccount.fetch(pda);
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

  console.log(program?.account);

  const createUser = async (name: string, avatar: string) => {
    if (program && publicKey) {
      const [pda] = await findProgramAddressSync(
        [
          Uint8Array.from(
            JSON.parse(
              idl.constants.find((e) => e.name == "USER_SEED")?.value ?? "[]"
            )
          ),
          publicKey.toBuffer(),
        ],
        program.programId
      );

      await program.methods
        .createUser(name, avatar)
        .accounts({
          userAccount: pda,
          // authority: publicKey,
          // systemProgram: SystemProgram.programId,
        })
        .rpc();
    }
  };

  return (
    <UserContext.Provider value={{ user, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
