import { useNavigate } from "react-router";
import React from "react";
import App from "../App";
import * as IconFa from "react-icons/fa";
import * as IconBs from "react-icons/bs";
import * as IconAi from "react-icons/ai";
import Modal from "react-modal";
import { AuctionItem } from "../component/AuctionItem";

function Home() {
  const navigate = useNavigate();
  return (
    <App id={0}>
      <div className="min-h-screen h-full w-full flex flex-col items-center bg-zinc-100 px-16 pt-8">
        <div className="w-full flex flex-col items-center gap-12">
          <div className="rounded-xl shadow-2xl w-full bg-white items-center flex flex-row">
            <div className="w-full bg-[#39A2FF] rounded-xl items-start text-black">
              <div className="flex flex-row w-full h-full justify-between gap-10 items-center">
                <div className="w-[39%] h-full rounded-xl bg-white drop p-6 flex flex-col gap-5">
                  <div className="text-4xl font-bold xl:block hidden font-mono">
                    Making a Difference Start Here
                  </div>
                  <div className="font-mono font-light text-gray-600">
                    Find and support a charity that aligns with your passions.
                  </div>
                  <button
                    className=" h-full p-2 w-full justify-center items-center bg-[#39A2FF] text-white rounded-lg font-semibold transition hover:bg-white hover:text-[#39A2FF] border-[#39A2FF] border-2"
                    onClick={() => {
                      navigate("/donate");
                    }}
                  >
                    Start
                  </button>
                </div>
                <div className="w-full h-full ">
                  <img
                    src="src/assets/images/donationCardBG.png"
                    width="85%"
                    height="85%"
                  ></img>
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
            <button
              className="text-purple-700 font-semibold"
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
              title={"Bored Monkey - Naruto Shippuden"}
              author="Renan Romera"
              content="Items 
              9,998
                ·  
              Created 
              Apr 2021
                ·  
              Creator earnings 
              2.5%
                ·  
              Chain 
              Ethereum
                ·  
              Category 
              PFPs
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details."
              price="10"
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
