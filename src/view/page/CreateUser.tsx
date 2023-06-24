import { useEffect } from "react";
import App from "../App";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router";
import ProfileForm from "../component/profile/ProfileForm";
import TransactionPendingModal from "../component/TransactionPendingModal";

const CreateUser = () => {
  const { user, createUser, onTrans } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, onTrans]);

  return (
    <>
      <TransactionPendingModal isOpen={onTrans} />
      <App id={-1}>
        <div className="rounded-lg bg-white shadow-xl h-full flex flex-col justify-center p-10 m-10 gap-10">
          <div className="font-bold text-3xl">Create your account</div>
          <ProfileForm
            onSubmit={(name, avatar) => {
              createUser(name, avatar).then((context) => {
                console.log(context);
                navigate("/");
              });
            }}
          />
        </div>
      </App>
    </>
  );
};

export default CreateUser;
