import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import App from "../App";
import Auction from "./Auction";
import AnchorService from "../../service/AnchorService";

interface AuctionItemProp {
  isSelected?: boolean;
  image?: string;
  text?: any;
  onClick?: () => void;
}
const AuctionItem = (props: AuctionItemProp) => {
  return (
    <button className="bg-white p-100 rounded-xl shadow-xl block">
      <img
        src={props.image}
        alt="Profile Image"
        className="h-40 w-40 rounded-xl drop-shadow-2xl"
      />
    </button>
  );
};

function Home() {
  const navigate = useNavigate();
  const a = AnchorService.getInstance().test();
  return (
    <App id={0}>
      <div className="h-full w-full flex flex-col items-center bg-zinc-100 p-16">
        <div className="w-auto flex flex-col items-start gap-8">
          <div className=" flex items-center w-full">
            <div className="text-3xl font-bold text-gray-700">
              SOL Price Live Data
            </div>
          </div>
          <div className="w-full flex flex-row justify-between gap-5">
            <div className="bg-white rounded-xl shadow-2xl h-64 justify-center w-2/3">
              <img
                src="src/assets/images/SolanaCurrentPriceExample.png"
                alt="Profile Image"
                className="w-full h-64 rounded-xl shadow-xl"
              />
            </div>
            <div className="bg-white rounded-xl shadow-2xl justify-center h-64 w-1/3">
              <img
                src="src/assets/images/SolanaPerformance.png"
                alt="Profile Image"
                className="w-full h-64 rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold text-gray-700">
              Recommendation
            </div>
            <button
              className="text-purple-700"
              onClick={() => {
                navigate("/auction");
              }}
            >
              View more
            </button>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <AuctionItem image="src/assets/images/monkeynft.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft4.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft2.png"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft5.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft6.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft7.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft8.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft3.avif"></AuctionItem>
          </div>
        </div>
      </div>
    </App>
  );
}

export default Home;
