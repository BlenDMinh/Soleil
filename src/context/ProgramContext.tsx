import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { createContext, useContext, useMemo } from "react";
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
      return new Program(idl as Idl, idl.metadata.address, provider);
    }
  }, [anchorWallet, connection]);

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
