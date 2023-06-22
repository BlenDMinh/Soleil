import { Divider } from "@fluentui/react-divider";
import AirdropTest from "./test/AirdropTest";

const TestPlace = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg w-full h-fit p-10 flex flex-col justify-between gap-5">
      <div className="text-lg text-slate-600 font-bold">
        Testing place for Developers
      </div>
      <Divider
        style={{
          alignSelf: "center",
          color: "#F5F5F5",
          width: "95%",
        }}
      />
      <AirdropTest />
      <Divider
        style={{
          alignSelf: "center",
          color: "#F5F5F5",
          width: "95%",
        }}
      />
    </div>
  );
};

export default TestPlace;
