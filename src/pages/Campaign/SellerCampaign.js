import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellerAvailableCampaign from "./SellerAvailableCampaign";
import SellerRegisteredCampaign from "./SellerRegisteredCampaign";

const SellerCampaign = () => {
  const [show, setShow] = useState("available-campaign");
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        Campaign Management
      </h2>
      <div>
        <div className="border-1 border-slate-600 m-2">
          {/* offer nav */}
          <div className="flex justify-center w-full py-3 text-slate-700">
            <ul className="flex justify-start gap-2">
              <li
                className={
                  show === "available-campaign"
                    ? " p-2 cursor-pointer border-b-2 border-orange-400 font-semibold"
                    : "p-2 cursor-pointer font-semibold"
                }
                onClick={() => setShow("available-campaign")}
              >
                Available Campaign
              </li>
              <li
                className={
                  show === "registered-campaign"
                    ? " p-2 cursor-pointer border-b-2 border-orange-400 font-semibold"
                    : "p-2 cursor-pointer font-semibold"
                }
                onClick={() => setShow("registered-campaign")}
              >
                Registered Campaign
              </li>
            </ul>
          </div>
          {/* offer body */}
          <div className="p-2 border-2 border-slate-300">
            {show === "available-campaign" && (
              <SellerAvailableCampaign></SellerAvailableCampaign>
            )}
            {show === "registered-campaign" && (
              <SellerRegisteredCampaign></SellerRegisteredCampaign>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCampaign;
