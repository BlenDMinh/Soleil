import AccountInfo from "../component/AccountInfo";
import TestPlace from "../component/TestPlace";
import WalletButton from "../component/WalletButton";
import App from "../App";
import { useUser } from "../../context/UserContext";

function Dev() {
  const { user } = useUser();

  return (
    <App id={4}>
      <div className="h-full w-full flex flex-col items-center bg-zinc-100 p-20 gap-10">
        <div className="mb-10 flex flex-row items-center gap-5 w-full">
          <div className="text-4xl font-bold tex-slate-600">Hello</div>
          <div className="flex flex-row gap-5">
            <div className="text-4xl font-bold text-purple-600">
              {user?.name ?? "Anonymous"}
            </div>
          </div>
        </div>
        <WalletButton />
        <AccountInfo />
        <TestPlace />
      </div>
    </App>
  );
}

export default Dev;
