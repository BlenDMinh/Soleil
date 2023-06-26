import * as IconBs from "react-icons/bs";
import * as IconBi from "react-icons/bi";
import App from "../App";
import SearchBar from "../component/SearchBar";
import { AuctionItem } from "../component/AuctionItem";

function Auction() {
  const handleSearch = (query: string) => {
    // Perform search logic with the query
    console.log("Searching for:", query);
  };
  return (
    <App id={2}>
      <div className="min-h-screen h-full w-full flex flex-col items-center bg-zinc-100 px-16 pt-6">
        <div className="w-full flex flex-col items-start gap-6">
          <div className="rounded-xl shadow-2xl w-full bg-white items-center flex flex-row">
            <div className="w-full bg-[#9A6AF8] rounded-xl items-start text-black">
              <div className="flex flex-row w-full h-full justify-between items-center">
                <div className=" h-full w-[58%]">
                  <img
                    src="src/assets/images/bidBG.png"
                    width="85%"
                    height="85%"
                  ></img>
                </div>
                <div className="w-[42%] h-full rounded-xl bg-white p-6 flex flex-col gap-5">
                  <div className="text-3xl font-bold xl:block hidden font-mono">
                    Charitable Auction: Bid to Make a Difference!
                  </div>
                  <div className="font-mono font-light text-gray-600">
                    This auction is non-profit and all proceeds will go towards
                    charitable causes.
                  </div>
                  <SearchBar onSearch={handleSearch}></SearchBar>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold text-gray-700 flex flex-row gap-2">
              <div className="text-red-500 text-base mt-3">
                <IconBs.BsCircleFill></IconBs.BsCircleFill>
              </div>
              Live Auction
            </div>
            <div className="flex flex-row justify-between gap-2 font-bold">
              <button>
                <IconBi.BiSortAZ></IconBi.BiSortAZ>
              </button>
              <button>
                <IconBi.BiSortUp></IconBi.BiSortUp>
              </button>
            </div>
          </div>
          <div className="w-full h-[20rem] grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center flex-col overflow-y-scroll">
            <AuctionItem image="/src/assets/images/monkeynft.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft3.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft4.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft5.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft6.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft7.jpeg"></AuctionItem>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold text-gray-700 flex flex-row gap-2">
              <div className="text-purple-700 text-2xl mt-2">
                <IconBs.BsHourglassSplit></IconBs.BsHourglassSplit>
              </div>
              Upcoming Auction
            </div>
            <div className="flex flex-row justify-between gap-2 font-bold">
              <button>
                <IconBi.BiSortAZ></IconBi.BiSortAZ>
              </button>
              <button>
                <IconBi.BiSortUp></IconBi.BiSortUp>
              </button>
            </div>
          </div>
          <div className="w-full h-[20rem] grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center flex-col overflow-y-scroll">
            <AuctionItem image="/src/assets/images/monkeynft8.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft7.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft6.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft5.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft4.jpeg"></AuctionItem>
            <AuctionItem image="/src/assets/images/monkeynft3.jpeg"></AuctionItem>
          </div>
        </div>
      </div>
    </App>
  );
}

export default Auction;
