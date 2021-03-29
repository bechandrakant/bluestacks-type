import React, { useState, useEffect } from "react";
import CampaignListData from "./CampaignListData";

const CampaignList = (props) => {
  const [filterData, setFilterData] = useState([]);

  const {
    language,
    headers,
    data,
    actionsLabel,
    activeTab,
    scheduleDate,
  } = props;

  useEffect(() => {
    let fd;
    switch (activeTab) {
      case "upcomingCampaigns":
        fd = data?.filter((data) => {
          let timeSlab = Math.floor((data.scheduledOn - Date.now()) / 86400000);
          return timeSlab > 0;
        });
        break;
      case "liveCampaigns":
        fd = data?.filter((data) => {
          let timeSlab = Math.floor((data.scheduledOn - Date.now()) / 86400000);
          return timeSlab === 0;
        });
        break;
      case "pastCampaigns":
        fd = data?.filter((data) => {
          let timeSlab = Math.floor((data.scheduledOn - Date.now()) / 86400000);
          return timeSlab < 0;
        });
        break;
      default:
        break;
    }
    setFilterData(fd);
  }, [props]);

  return (
    <table
      className="container"
      style={{
        marginTop: 20,
        borderCollapse: "collapse",
      }}
    >
      <tr>
        {headers.map((header) => (
          <th key={Math.random()}>{header}</th>
        ))}
      </tr>
      {filterData.map((d) => (
        <CampaignListData
          key={d.id}
          data={d}
          actionsLabel={actionsLabel}
          scheduleDate={scheduleDate}
          language={language}
        />
      ))}
    </table>
  );
};

export default CampaignList;
