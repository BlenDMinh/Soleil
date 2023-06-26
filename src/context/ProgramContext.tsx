import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { createContext, useContext, useEffect, useMemo } from "react";
import idl from "../idl/solei.json";

const ProgramContext = createContext<{
  program?: Program;
}>({
  program: undefined,
});

export const useProgram = () => {
  const context = useContext(ProgramContext);
  if (!context)
    throw new Error("Parent must be wrapped inside ProgramProvider");

  return context;
};

const ProgramProvider = ({ children }: any) => {
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new AnchorProvider(
        connection,
        anchorWallet,
        AnchorProvider.defaultOptions()
      );

      const program = new Program(idl as Idl, idl.metadata.address, provider);
      return program;
    }
  }, [anchorWallet, connection]);

  useEffect(() => {
    const start = async () => {
      if (program) {
        console.log("Listening DevEvent");
        program.addEventListener("DevEvent", (event, slot) => {
          console.log(event, slot);
        });
      }
    };
    start();
  }, [program]);

  return (
    <ProgramContext.Provider
      value={{
        program,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export default ProgramProvider;
