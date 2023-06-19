import * as IconBi from "react-icons/bi";
import * as IconGi from "react-icons/gi";
import * as IconAi from "react-icons/ai";
import * as IconMd from "react-icons/md";
interface MenuButtonProp {
  isSelected: boolean;
  icon?: any;
  text?: any;
}
const MenuButton = (props: MenuButtonProp) => {
  if (props.isSelected)
    return (
      <button className="bg-purple-600 border-2 border-purple-600 rounded-lg drop-shadow-lg shadow-purple-300 text-white font-bold w-1/2 justify-start items-start gap-1 flex flex-row p-2 transition hover:bg-white hover:text-purple-600">
        {props.icon}
        <div className="lg:block hidden">{props.text}</div>
      </button>
    );
  return (
    <button className="rounded-lg text-gray-600 font-bold w-1/2 justify-start mt-3 items-start gap-1 flex flex-row p-2 transition hover:text-purple-600 border-white border-2 hover:border-purple-300">
      {props.icon}
      <div className="lg:block hidden">{props.text}</div>
    </button>
  );
};

const ProfileImage = () => {
  return (
    <div>
      <button className="rounded-full bg-white justify-start items-start gap-1 flex flex-row">
        <img
          src="src/assets/images/ava-03.png"
          alt="Profile Image"
          className="w-10 h-10 rounded-full shadow-xl"
        />
        <div>
          <div className="text-sm text-black font-serif font-semibold lg:block hidden">
            {" "}
            Huynh Hai Dang
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
      src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=025"
      alt="Solana icon"
      className="w-full h-full"
    />
  );
};

interface LeftNavigatorProp {
  id: number;
}

const LeftNavigator = (props: LeftNavigatorProp) => {
  const id = props.id;
  return (
    <div className="sticky h-screen w-[15%] min-w-[15%] flex flex-col justify-between bg-white items-center top-0 shadow-xl">
      <div className="sticky h-full w-full flex flex-col items-center top-0">
        <div className="w-1/3 ml-7 mr-7 mb-7 mt-14">
          <LogoIcon></LogoIcon>
        </div>
        <div className="w-3/4 h-px justify-center bg-slate-200 m-6"></div>
        <MenuButton
          isSelected={id == 0}
          icon={<IconAi.AiOutlineAppstore size="22" />}
          text={"Home"}
        />
        <MenuButton
          isSelected={id == 1}
          icon={<IconGi.GiEarthAmerica size="22" />}
          text={"Explore"}
        />

        <MenuButton
          isSelected={id == 2}
          icon={<IconBi.BiLayerPlus size="22" />}
          text={"Create"}
        />

        <MenuButton
          isSelected={id == 3}
          icon={<IconMd.MdAccountCircle size="22" />}
          text={"Profile"}
        />

        <MenuButton
          isSelected={id == 4}
          icon={<IconBi.BiHelpCircle size="22" />}
          text={"Help"}
        />
      </div>
      <div className="w-3/4 h-px justify-center bg-slate-200"></div>
      <div className="mb-5">
        <ProfileImage></ProfileImage>
      </div>
    </div>
  );
};

export default LeftNavigator;
