import { useNavigate } from "react-router";
import React from "react";
import App from "../App";
import * as IconFa from "react-icons/fa";
import * as IconAi from "react-icons/ai";
import Modal from "react-modal";

interface AuctionItemProp {
  isSelected?: boolean;
  image?: string;
  price?: string;
  title?: string;
  author?: string;
  content?: string;
  onClick?: () => void;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    padding: "60px", // Add padding to the content
    width: "50%",
  },
};
const AuctionItem = (props: AuctionItemProp) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        className="rounded-xl flex flex-col justify-end shadow-xl w-[200px] h-[200px] hover:w-[220px] hover:h-[220px] transition-all"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={openModal}
      >
        <div className="flex flex-col p-2 w-full items-start bg-transparent">
          <div className="font-bold text-xs text-white break-words">
            {props.title}
          </div>
          <div className="flex flex-row mt-auto">
            {props.price ? (
              <div className="flex flex-row gap-1">
                <div className="text-white font-mono">Floor: </div>
                <div className="text-white font-semibold font-mono">
                  {props.price + ""}
                </div>

                <div className="text-white font-mono">SOL</div>
              </div>
            ) : (
              <div className="text-white font-semibold"> SOLD OUT</div>
            )}
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="w-full h-full rounded-xl flex flex-col gap-4 justify-center items-start">
          <div className="flex flex-row justify-between items-end w-full">
            <img
              src={props.image}
              className="h-1/2 w-1/2 rounded-xl shadow-2xl"
            ></img>
            <button className="w-1/5 h-1/6 p-2 bg-purple-700 rounded-xl text-white flex flex-row gap-2">
              <IconAi.AiOutlineTags />
              <div className="text-sm font-semibold">Make Offer</div>
            </button>
          </div>
          <div className="text-2xl font-bold">{props.title}</div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row gap-2">
              <div className="text-base font-semibold">By: {props.author}</div>
              <img
                src="src/assets/images/verify.png"
                width={25}
                height={25}
              ></img>
            </div>
            <div className="flex flex-row w-fit gap-6">
              <IconFa.FaDiscord />
              <IconFa.FaFacebook />
              <IconFa.FaTwitter />
              <IconFa.FaInstagram />
            </div>
          </div>

          <div className="text-sm">{props.content}</div>
          <div className="text-2xl font-mono font-semibold">
            Floor: {props.price} SOL
          </div>
        </div>
      </Modal>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  return (
    <App id={0}>
      <div className="min-h-screen h-full w-full flex flex-col items-center bg-zinc-100 p-16">
        <div className="w-full flex flex-col items-start gap-8">
          <div className="rounded-xl shadow-2xl w-full bg-white items-center flex flex-row">
            <div className="w-full bg-[#39A2FF] rounded-xl items-start text-black">
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
                  backgroundPosition: "right",
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
                    Start Donating
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
