import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const WalletContext = createContext<{
  isInit?: boolean;
}>({});

export function useSoleilWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside SoleilWalletProvider");
  }
  return context;
}

export const SoleilWalletProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isInit, setInit] = useState<boolean | undefined>();

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Testnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(e) => {
          console.log("Wallet error: ", e);
          setInit(false);
        }}
      >
        <WalletContext.Provider
          value={{
            isInit,
          }}
        >
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
