import React from "react";
import { useEffect } from "react";
import { appData } from "../constants/appData";
import CampaignList from "./CampaignList";

const Campaigns = ({ language, status }) => {
  useEffect(() => {
    // import campaign data
  }, []);

  return (
    <CampaignList
      language={language}
      headers={appData.headers[language]}
      data={appData.data}
      actionsLabel={appData.actions[language]}
    />
  );
};

export default Campaigns;
