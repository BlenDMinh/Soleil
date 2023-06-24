import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import App from "../App";
import ProfileForm from "../component/profile/ProfileForm";
import TransactionPendingModal from "../component/TransactionPendingModal";
import { Spinner } from "react-activity";

const EditProfile = () => {
  const { user, editUser, onTrans, isUserInit } = useUser();
  useEffect(() => {
    console.log(user);
  }, [isUserInit]);
  return (
    <>
      <TransactionPendingModal isOpen={onTrans} />
      <App id={-1}>
        <div className="rounded-lg bg-white shadow-xl h-full flex flex-col justify-center p-10 m-10 gap-10">
          <div className="font-bold text-3xl">Profile info</div>
          {isUserInit ? (
            <ProfileForm
              currentName={user?.name}
              currentAvatar={user?.avatarImage}
              onSubmit={(name, avatar) => {
                editUser(name, avatar).then((context) => {
                  console.log(context);
                });
              }}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </App>
    </>
  );
};

export default EditProfile;
