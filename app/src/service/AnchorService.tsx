import * as Anchor from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { PublicKey, Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL, Connection} from "@solana/web3.js";
import idl from "../../../target/idl/solei.json";
import {ClockworkProvider, PAYER_PUBKEY} from "@clockwork-xyz/sdk";
import { publicKey } from "@project-serum/anchor/dist/cjs/utils";

class AnchorService {
  private static instance = new AnchorService();
  public static getInstance() {
    if (this.instance == undefined) this.instance = new AnchorService();
    return this.instance;
  }

  test() {
    const programId = new PublicKey(idl.metadata.address);
    const connection = new Connection("https://api.testnet.solana.com", "processed");
    const wallet = useAnchorWallet();
    let provider;
    if (wallet){
    // if (typeof process !== "undefined" && process.release.name === "node") {
    // const Anchor = require("@project-serum/anchor");
    provider = new Anchor.AnchorProvider(
      connection,
      wallet,
      Anchor.AnchorProvider.defaultOptions()
    );
    const program = new Anchor.Program(idl, programId, provider);
    const clockworkProvider = ClockworkProvider.fromAnchorProvider(provider);
    // } else {
    //   console.log(123);
    // }


    const threadId = "sol_transferjs" + new Date().getTime();
    const [threadAddress] = clockworkProvider.getThreadPDA(
          wallet.publicKey,   // authority
          threadId
      )
  
      const recipient = new PublicKey("4raTL4Fpy2pg9nHNqwRujUynaLfepmoUGcNN1QddQAd6");
      console.log(`🫴  recipient: ${recipient.toString()}\n`);

    //   // 1️⃣  Prepare an instruction to be automated.
      // const transferIx = SystemProgram.transfer({
      //     fromPubkey: wallet.publicKey,
      //     toPubkey: recipient,
      //     lamports: LAMPORTS_PER_SOL,
      // });
  
    //   // 2️⃣  Define a trigger condition.
      // const trigger = {
      //     cron: {
      //         schedule: "*/1000 * * * * * *",
      //         skippable: false,
      //     },
      // };
    // const ix = clockworkProvider.threadCreate(
    //     wallet.publicKey,           // authority
    //     threadId,                  // id
    //     [transferIx],              // instructions
    //     trigger,                   // trigger
    //     LAMPORTS_PER_SOL,      // amount to fund the thread with
    // );
    // const tx = new Transaction().add(ix);
    // const signature =  clockworkProvider.anchorProvider.sendAndConfirm(tx);
    // console.log(`🗺️  explorer: https://app.clockwork.xyz/threads/${threadAddress}?cluster=custom&customUrl=${connection.rpcEndpoint}\n`);
    
    // // Check balance of recipient address
    // new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    // let balance =  connection.getBalance(recipient) / LAMPORTS_PER_SOL;
    // console.log(`✅ recipient balance: ${balance} SOL\n`);
    // expect(balance).to.eq(1);

    //  new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    // balance =  connection.getBalance(recipient) / LAMPORTS_PER_SOL;
    // console.log(`✅ recipient balance: ${balance} SOL\n`);
    // expect(balance).to.eq(2);

    program.methods
      .solei()
      .rpc()
      .then((context) => {
        console.log(context);
      });
    }
  }
}

export default AnchorService;
