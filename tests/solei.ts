import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Solei } from "../target/types/solei";
import { SystemProgram } from "@solana/web3.js";

describe("solei", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Solei as Program<Solei>;

  it("Is initialized!", async () => {
    // Add your test here.
    SystemProgram
    const tx = await program.methods.solei().rpc();
    console.log("Your transaction signature", tx);
  });
});
