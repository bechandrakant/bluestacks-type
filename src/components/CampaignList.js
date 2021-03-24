import React from "react";
import CampaignListData from "./CampaignListData";

const CampaignList = ({ language, headers, data, actionsLabel }) => {
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
      {data.map((d) => (
        <CampaignListData
          key={d.id}
          data={d}
          actionsLabel={actionsLabel}
          language={language}
        />
      ))}
    </table>
  );
};

export default CampaignList;
