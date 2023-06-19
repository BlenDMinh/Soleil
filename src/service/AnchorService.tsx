import * as Anchor from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import idl from "./idl.json";

class AnchorService {
  private static instance = new AnchorService();
  public static getInstance() {
    if (this.instance == undefined) this.instance = new AnchorService();
    return this.instance;
  }

  test() {
    const programId = new PublicKey(
      "EQb8D24n5CDHMmxpHBCBqJDWfvQBJWnuNhyZtcRA39dn"
    );
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    let provider;

    // if (typeof process !== "undefined" && process.release.name === "node") {
    // const Anchor = require("@project-serum/anchor");
    provider = new Anchor.AnchorProvider(
      connection,
      wallet,
      Anchor.AnchorProvider.defaultOptions()
    );
    // } else {
    //   console.log(123);
    // }

    const program = new Anchor.Program(idl, programId, provider);
    program.methods
      .hello()
      .rpc()
      .then((context) => {
        connection.getParsedTransaction(context).then((res) => {
          console.log(res);
        });
      });
  }
}

export default AnchorService;
