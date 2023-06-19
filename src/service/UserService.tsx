import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import SolanaService from "./SolanaService";
import { AnchorWallet } from "@solana/wallet-adapter-react";

class UserService {
  private static instance = new UserService();
  public static getInstance() {
    if (this.instance == undefined) this.instance = new UserService();
    return this.instance;
  }
  private constructor() {
    const secretKeyStr = localStorage.getItem("@SECRET_KEY");
    if (secretKeyStr) {
      const secretKey = Uint8Array.from(JSON.parse(secretKeyStr) as number[]);
      this.keyPair = Keypair.fromSecretKey(secretKey);
    }
    this.name = localStorage.getItem("@NAME") ?? undefined;
  }

  public async getBalance() {
    if (!this.wallet) return 0;
    return SolanaService.getInstance().getBalance(this.wallet!.publicKey);
  }

  public async saveKey(secretKey: Uint8Array) {
    this.keyPair = Keypair.fromSecretKey(secretKey);
    localStorage.setItem("@SECRET_KEY", `[${secretKey.toString()}]`);
  }

  public async saveName(name: string) {
    this.name = name;
    localStorage.setItem("@NAME", name);
  }

  public async createNewKeyPair() {
    this.keyPair = Keypair.generate();
    this.saveKey(this.keyPair.secretKey);
    return this.keyPair;
  }

  public async removeKeypair() {
    localStorage.removeItem("@SECRET_KEY");
    this.keyPair = undefined;
    this.name = undefined;
  }

  public async requestAirdrop(amount_sol: number) {
    return SolanaService.getInstance().airDrop(
      this.wallet!.publicKey,
      amount_sol * LAMPORTS_PER_SOL
    );
  }

  wallet?: AnchorWallet;
  keyPair?: Keypair;
  name?: string;
}

export default UserService;
