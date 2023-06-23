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
  price?: string;
  title?: string;
  onClick?: () => void;
}
const AuctionItem = (props: AuctionItemProp) => {
  return (
    <button
      className="rounded-xl flex flex-col justify-end shadow-xl w-[200px] h-[200px] hover:w-[220px] hover:h-[220px] transition-all"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col p-2 w-full items-start bg-transparent">
        <div className="font-bold text-white">{props.title}</div>
        <div className="flex flex-row mt-auto">
          {props.price ? (
            <div className="flex flex-row gap-1">
              <div className="text-white font-serif">Floor: </div>
              <div className="text-white font-semibold">{props.price + ""}</div>

              <div className="text-white font-serif">SOL</div>
            </div>
          ) : (
            <div className="text-white font-semibold"> SOLD OUT</div>
          )}
        </div>
      </div>
    </button>
  );
};

function Home() {
  const navigate = useNavigate();
  return (
    <App id={0}>
      <div className="min-h-screen h-full w-full flex flex-col items-center bg-zinc-100 p-16">
        <div className="w-full flex flex-col items-start gap-8">
          <div className="rounded-xl shadow-2xl w-full bg-white items-center flex flex-row">
            <div className="w-full bg-[#39A2FF] rounded-xl items-start text-black ">
              <div
                style={{
                  backgroundImage:
                    "url('src/assets/images/vecteezy_vector-banner-of-donation-and-charity_15484328.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: 378,
                  width: "100%",

                  boxSizing: "border-box",
                  borderRadius: "2%",
                }}
              >
                <div className="w-[34%] h-full rounded-lg bg-white px-8 pt-12 flex flex-col gap-4">
                  <div className="text-4xl font-bold xl:block hidden font-mono">
                    Making a Difference Start Here
                  </div>
                  <div className="font-mono font-light text-gray-600">
                    Find and support a charity that aligns with your passions.
                  </div>
                  <button
                    className="p-2 h-fit justify-center items-center bg-[#39A2FF] text-white rounded-lg font-semibold"
                    onClick={() => {
                      navigate("/donate");
                    }}
                  >
                    Start Donation
                  </button>
                </div>
              </div>
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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            <AuctionItem
              image="src/assets/images/monkeynft.jpeg"
              title={"Bored Monkey"}
              price="100"
            ></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft4.jpeg"></AuctionItem>
            <AuctionItem image="src/assets/images/monkeynft2.png"></AuctionItem>
          </div>
        </div>
      </div>
    </App>
  );
}

export default Home;
