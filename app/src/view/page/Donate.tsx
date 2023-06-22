import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function Donate() {
  return (
    <div className="h-full flex justify-start w-screen">
      <LeftNavigator id={2} />
      <div className="h-screen w-full bg-zinc-100">Donate</div>
      <RightBidderList></RightBidderList>
    </div>
  );
}

export default Donate;
