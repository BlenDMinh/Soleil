import WalletButton from "./WalletButton";
import "./css/RightBidderList.css";

interface BidderInfoProp {
  name: string;
  lastTimeUpdated: string;
  transactionMoney: number;
  image: string;
}
const Bidder = (props: BidderInfoProp) => {
  return (
    <div className=" flex w-full flex-row justify-between">
      <div className="flex flex-row">
        <img
          src={props.image}
          alt="Bidder information"
          className="w-10 h-10 rounded-full shadow-xl"
        ></img>
        <div className=" flex-col justify-start items-start w-full">
          <div className="text-sm text-black font-serif w-full word-break font-semibold lg:block hidden">
            {props.name}
          </div>
          <div className="text-xs text-gray-500 font-serif font-thin lg:block hidden">
            {props.lastTimeUpdated} hours ago
          </div>
        </div>
      </div>
      <div className="text-black flex font-normal  text-lg">
        ${props.transactionMoney}
      </div>
    </div>
  );
};

interface NewActivityInfo {
  title: string;
  content: string;
  image: string;
}

const NewActivity = (props: NewActivityInfo) => {
  return (
    <div className=" flex flex-row w-full items-center gap-5">
      <img
        src={props.image}
        alt="Bidder information"
        className="w-10 h-10 rounded-full"
      ></img>
      <div className="flex w-full flex-col my-5">
        <div className="text-sm text-black font-serif font-semibold lg:block hidden break-words w-11/12">
          {props.title}
        </div>
        <div className="text-xs text-gray-500 font-serif font-thin lg:block hidden break-words w-fit">
          {props.content}
        </div>
        <div className="w-1/2 h-px items-center bg-slate-200"></div>
      </div>
    </div>
  );
};

const RightBidderList = () => {
  return (
    <div className="sticky top-0 w-[24%] min-w-[24%] h-full min-h-screen hidden md:block flex-col justify-center items-center bg-white shadow-xl">
      <div className="w-full flex flex-col items-start px-5">
        <div className="text-black sticky font-semibold text-2xl mt-8">
          Wallet
        </div>
        <div className="mt-8 px-8 w-full">
          <WalletButton />
        </div>
        <div className="text-black sticky font-semibold text-2xl mt-8">
          Top Bidder
        </div>
        <div className="w-full h-[20rem] flex items-center flex-col overflow-y-scroll">
          <div className="w-1/2 h-px items-center bg-slate-200"></div>
          <div className="mt-6 w-full px-5 gap-3 flex flex-col">
            <Bidder
              name="Anh Minh"
              image="/src/assets/images/ava-01.png"
              lastTimeUpdated="2"
              transactionMoney={300}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Diem Hoang"
              image="/src/assets/images/ava-02.png"
              lastTimeUpdated="2"
              transactionMoney={400}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Trung Hieu"
              image="/src/assets/images/ava-04.png"
              lastTimeUpdated="2"
              transactionMoney={320}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Thanh Vinh"
              image="/src/assets/images/ava-05.png"
              lastTimeUpdated="2"
              transactionMoney={308}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Anh Minh"
              image="/src/assets/images/ava-01.png"
              lastTimeUpdated="2"
              transactionMoney={300}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Diem Hoang"
              image="/src/assets/images/ava-02.png"
              lastTimeUpdated="2"
              transactionMoney={400}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Trung Hieu"
              image="/src/assets/images/ava-04.png"
              lastTimeUpdated="2"
              transactionMoney={320}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
            <Bidder
              name="Thanh Vinh"
              image="/src/assets/images/ava-05.png"
              lastTimeUpdated="2"
              transactionMoney={308}
            ></Bidder>
            <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
          </div>
        </div>
        <div className="text-black sticky font-semibold text-2xl mt-8">
          Activity
        </div>
        <div className="w-full h-60 overflow-y-scroll flex items-center flex-col">
          <div>
            <div className="w-1/2 h-px items-center bg-slate-200"></div>
            <div className="mt-6 w-full px-5">
              <NewActivity
                title="New Bid Appeared"
                content="Dang Ngoc Nam has placed higher bid on this postasdfadf"
                image="/src/assets/images/icons8-billing-64.png"
              ></NewActivity>
              <NewActivity
                title="New Donation Appeared"
                content="Backychos just made a donation"
                image="/src/assets/images/icons8-donate-64.png"
              ></NewActivity>
              <NewActivity
                title="New Auction Appeared"
                content="NiggaIsStarving just made an auction"
                image="/src/assets/images/icons8-check-dollar-48.png"
              ></NewActivity>
              <NewActivity
                title="New Bid Appeared"
                content="Dang Ngoc Nam has placed higher bid on this postasdfadf"
                image="/src/assets/images/icons8-billing-64.png"
              ></NewActivity>
              <NewActivity
                title="New Donation Appeared"
                content="Backychos just made a donation"
                image="/src/assets/images/icons8-donate-64.png"
              ></NewActivity>
              <NewActivity
                title="New Auction Appeared"
                content="NiggaIsStarving just made an auction"
                image="/src/assets/images/icons8-check-dollar-48.png"
              ></NewActivity>
            </div>
          </div>
        </div>
        {/*<div className="h-1/2 min-h-[49%]  items-start justify-end flex flex-col">
          <div className="text-black sticky font-semibold text-2xl ml-8">
            Activity
          </div>

          <div className="mx-8 mt-8">
            <NewActivity
              title="New Bid Appeared"
              content="Dang Ngoc Nam has placed higher bid on this postasdfadf"
              image="/src/assets/images/icons8-billing-64.png"
            ></NewActivity>

            <NewActivity
              title="New Donation Appeared"
              content="Backychos just made a donation"
              image="/src/assets/images/icons8-donate-64.png"
            ></NewActivity>
            <NewActivity
              title="New Auction Appeared"
              content="NiggaIsStarving just made an auction"
              image="/src/assets/images/icons8-check-dollar-48.png"
            ></NewActivity>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default RightBidderList;
