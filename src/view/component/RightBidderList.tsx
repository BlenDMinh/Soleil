interface BidderInfoProp {
  name: string;
  lastTimeUpdated: string;
  transactionMoney: number;
  image: string;
}
const Bidder = (props: BidderInfoProp) => {
  return (
    <div className=" flex flex-row m-5 justify-between gap-10 w-full h-30">
      <div className="flex flex-row">
        <img
          src={props.image}
          alt="Bidder information"
          className="w-10 h-10 rounded-full shadow-xl"
        ></img>
        <div className=" flex-col justify-start items-start">
          <div className="text-sm text-black font-serif font-semibold lg:block hidden">
            {props.name}
          </div>
          <div className="text-xs text-gray-500 font-serif font-thin lg:block hidden">
            {props.lastTimeUpdated} hours ago
          </div>
        </div>
      </div>
      <div className="text-black flex font-normal   text-lg">
        ${props.transactionMoney}
      </div>
    </div>
  );
};

const RightBidderList = () => {
  return (
    <div className="sticky h-full w-[24%] min-w-[24%] hidden md:block flex-col justify-between bg-white items-center top-0 right-0">
      <div className="text-black sticky font-semibold text-2xl m-8">
        Top Bidder
      </div>
      <div className="sticky h-full w-full flex flex-col items-start top-0">
        <div className="w-3/4 h-px items-center bg-slate-200 ml-10"></div>
        <div className="m-4">
          <Bidder
            name="Anh Minh"
            image="src/assets/images/ava-01.png"
            lastTimeUpdated="2"
            transactionMoney={300}
          ></Bidder>
          <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
          <Bidder
            name="Diem Hoang"
            image="src/assets/images/ava-02.png"
            lastTimeUpdated="2"
            transactionMoney={400}
          ></Bidder>
          <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
          <Bidder
            name="Trung Hieu"
            image="src/assets/images/ava-04.png"
            lastTimeUpdated="2"
            transactionMoney={320}
          ></Bidder>
          <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
          <Bidder
            name="Thanh Vinh"
            image="src/assets/images/ava-05.png"
            lastTimeUpdated="2"
            transactionMoney={308}
          ></Bidder>
          <div className="w-3/4 h-px items-center bg-slate-200 ml-16"></div>
        </div>
        <div className="text-black sticky font-semibold text-2xl m-8">
          Activity
        </div>
      </div>
    </div>
  );
};

export default RightBidderList;
