import * as IconBi from "react-icons/bi";
import * as IconGi from "react-icons/gi";
import * as IconAi from "react-icons/ai";
import * as IconMd from "react-icons/md";
import * as IconFa from "react-icons/fa";
import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
interface MenuButtonProp {
  isSelected: boolean;
  icon?: any;
  text?: any;
  onClick?: () => void;
}
const MenuButton = (props: MenuButtonProp) => {
  if (props.isSelected)
    return (
      <button
        className="bg-purple-700 border-2 border-purple-700 font-sans rounded-lg drop-shadow-2xl mt-3 shadow-purple-300 text-white font-bold w-1/2 justify-start items-start gap-1 flex flex-row p-2 transition hover:bg-white hover:text-purple-600"
        onClick={props.onClick}
      >
        {props.icon}
        <div className="lg:block hidden">{props.text}</div>
      </button>
    );
  return (
    <button
      className="rounded-lg text-gray-400 font-bold w-1/2 font-sans justify-start mt-3 items-start gap-1 flex flex-row p-2 transition hover:text-purple-600 border-white border-2 hover:border-purple-300"
      onClick={props.onClick}
    >
      {props.icon}
      <div className="lg:block hidden">{props.text}</div>
    </button>
  );
};

const ProfileImage = () => {
  const { user } = useUser();
  useEffect(() => {}, [user]);
  return (
    <div>
      <button className="rounded-full bg-white justify-start items-start gap-1 flex flex-row">
        <img
          src={user?.avatarImage ?? ""}
          alt="Profile Image"
          className="w-10 h-10 rounded-full shadow-xl"
        />
        <div>
          <div className="text-sm text-black font-serif font-semibold lg:block hidden">
            {user?.name ?? "Anonymous"}
          </div>
          <div className="text-xs text-gray-500 font-serif font-thin lg:block hidden">
            Developer
          </div>
        </div>
      </button>
    </div>
  );
};

const LogoIcon = () => {
  return (
    <img
      src="src/assets/images/SSS.png"
      alt="Solana icon"
      className="w-full h-full"
    />
  );
};

interface LeftNavigatorProp {
  id: number;
}
// Home (Recommendation)
// Donation
// Auction
// Developer

const LeftNavigator = (props: LeftNavigatorProp) => {
  const id = props.id;
  const navigate = useNavigate();
  return (
    <div className="sticky h-full min-h-screen w-[15%] min-w-[15%] flex flex-col justify-between bg-white items-center top-0 shadow-xl">
      <div className="h-full w-full flex flex-col items-center top-0">
        <div className="w-1/3 m-4 pt-6">
          <LogoIcon></LogoIcon>
        </div>

        <div className="w-3/4 h-px justify-center bg-slate-200 m-5"></div>
        <MenuButton
          isSelected={id == 0}
          icon={<IconAi.AiOutlineAppstore size="22" />}
          text={"Home"}
          onClick={() => {
            navigate("/");
          }}
        />
        <MenuButton
          isSelected={id == 1}
          icon={<IconGi.GiEarthAmerica size="22" />}
          text={"Auction"}
          onClick={() => {
            navigate("/auction");
          }}
        />
        <MenuButton
          isSelected={id == 2}
          icon={<IconFa.FaDonate size="22" />}
          text={"Donate"}
          onClick={() => {
            navigate("/donate");
          }}
        />

        <MenuButton
          isSelected={id == 3}
          icon={<IconBi.BiLayerPlus size="22" />}
          text={"Create"}
          onClick={() => {
            navigate("/create");
          }}
        />

        <MenuButton
          isSelected={id == 4}
          icon={<IconMd.MdDeveloperMode size="22" />}
          text={"Dev"}
          onClick={() => {
            navigate("/dev");
          }}
        />

        <MenuButton
          isSelected={id == 5}
          icon={<IconBi.BiHelpCircle size="22" />}
          text={"Help"}
          onClick={() => {
            navigate("/help");
          }}
        />
      </div>
      <div className="w-3/4 h-px justify-center bg-slate-200"></div>
      <div className="m-5">
        <ProfileImage></ProfileImage>
      </div>
    </div>
  );
};

export default LeftNavigator;
