import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function Help() {
  return (
    <div className="h-full flex justify-start w-screen">
      <LeftNavigator id={5} />
      <div className="h-screen w-full bg-zinc-100">Help cc</div>
      <RightBidderList></RightBidderList>
    </div>
  );
}

export default Help;
