import React from "react";
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
export const AuctionItem = (props: AuctionItemProp) => {
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
