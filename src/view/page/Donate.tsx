import LeftNavigator from "../component/LeftNavigator";
import RightBidderList from "../component/RightBidderList";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import App from "../App";

function Donate() {
  return (
    <App id={2}>
      <div className="w-full">
        <img
                src="src/assets/images/vecteezy_charity-and-nonprofit-organization-cartoon-banner_15370450.jpg"
                alt="Profile Image"
                className="w-1/2 h-52"
              
              />
        </div>
    </App>
  );
}

export default Donate;
