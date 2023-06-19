import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";

function Explore() {
  return (
    <div className="h-screen flex justify-start w-screen">
      <LeftNavigator id={-1} />
      <div className="h-full w-full bg-zinc-100"></div>
      <RightBidderList></RightBidderList>
    </div>
  );
}

export default Explore;
