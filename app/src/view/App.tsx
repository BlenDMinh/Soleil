import LeftNavigator from "./component/LeftNavigator";
import RightBidderList from "./component/RightBidderList";

interface AppProps {
  children: any;
  id: number;
}

const App = (props: AppProps) => {
  return (
    <div className="h-full flex justify-start w-full">
      <LeftNavigator id={props.id} />
      <div className="h-full w-full bg-zinc-100">{props.children}</div>
      <RightBidderList></RightBidderList>
    </div>
  );
};

export default App;
