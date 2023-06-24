import { PublicKey } from "@solana/web3.js";

export interface User {
  name: string;
  avatarImage: string;
  authority: PublicKey;
}
