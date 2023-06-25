import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import App from "../App";
import SearchBar from "../component/SearchBar";

function Auction() {
  const handleSearch = (query: string) => {
    // Perform search logic with the query
    console.log("Searching for:", query);
  };
  return (
    <App id={1}>
      <div className="min-h-screen h-full w-full flex flex-col items-center bg-zinc-100 p-16">
        <div className="w-full flex flex-col items-start gap-8">
          <div className="rounded-xl shadow-2xl w-full bg-white items-center flex flex-row">
            <div className="w-full bg-[#9A6AF8] rounded-xl items-start text-black">
              <div className="flex flex-row w-full h-full justify-between items-center">
                <div className=" h-full ">
                  <img
                    src="src/assets/images/bidBG.png"
                    width="100%"
                    height="100%"
                  ></img>
                </div>
                <div className="w-[70%] h-full rounded-xl bg-white p-6 flex flex-col gap-5">
                  <div className="text-4xl font-bold xl:block hidden font-mono">
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
        </div>
      </div>
    </App>
  );
}

export default Auction;
