import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletButton: FC = () => {
  return <Content />;
};
export default WalletButton;

const Content: FC = () => {
  return <WalletMultiButton />;
};
