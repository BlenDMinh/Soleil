import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const net = "testnet";

class SolanaService {
  private static instance = new SolanaService();
  public static getInstance() {
    if (this.instance == undefined) this.instance = new SolanaService();
    return this.instance;
  }
  private connection = new Connection(clusterApiUrl(net));
  private constructor() {}

  getBalance(pubKey: PublicKey) {
    return this.connection.getBalance(pubKey);
  }

  getURL(pubKey: PublicKey) {
    return `https://explorer.solana.com/address/${pubKey.toBase58()}?cluster=${net}`;
  }

  async airDrop(pubKey: PublicKey, amount: number) {
    const signature = await this.connection.requestAirdrop(pubKey, amount);
    const block = await this.connection.getLatestBlockhash();
    return this.connection.confirmTransaction({
      blockhash: block.blockhash,
      lastValidBlockHeight: block.lastValidBlockHeight,
      signature: signature,
    });
  }
}

export default SolanaService;
