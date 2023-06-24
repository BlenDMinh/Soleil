import { FC } from "react";
import { Spinner } from "react-activity";
import Modal from "react-modal";

const TransactionPendingModal: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      className="flex flex-col items-center justify-center h-full"
    >
      <Spinner />
      <div className="text-lg">Sometime, you might stuck on this screen</div>
      <div className="">Please refresh - F5 this page to move on</div>
    </Modal>
  );
};

export default TransactionPendingModal;
