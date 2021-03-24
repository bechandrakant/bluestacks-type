import React, { useState } from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PopUp from "./PopUp";

const CampaignListData = ({ language, data, actionsLabel }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open === true ? (
        <PopUp data={data} close={() => setOpen(false)} language={language} />
      ) : null}
      <tr style={{ padding: 10 }}>
        <td>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 20,
            }}
          >
            <span style={{ fontWeight: 400, margin: 4 }}>
              {new Date(data.createdOn).add(-1).day().toString("MMM yyyy, dd")}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "#9CA2B7",
                margin: 4,
              }}
            >
              {"5 days ago"}
            </span>
          </div>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <img
            src={data.image_url}
            alt={data.name}
            style={{ height: 40, width: 40, margin: 10 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 400, margin: 4 }}>
              {data.name[language]}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "#9CA2B7",
                margin: 4,
              }}
            >
              {data.region}
            </span>
          </div>
        </td>
        <td>
          <div className="icon" onClick={() => setOpen(true)}>
            <MonetizationOnIcon style={{ color: "#EBC668", paddingRight: 6 }} />{" "}
            {actionsLabel[0]}
          </div>
        </td>
        <td>
          <div className="icon">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InsertDriveFileIcon
                style={{ color: "#C1D896", paddingRight: 6 }}
              />{" "}
              {actionsLabel[1]}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <EqualizerIcon style={{ color: "#F29E7A", paddingRight: 6 }} />{" "}
              {actionsLabel[2]}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DateRangeIcon style={{ color: "#7BAFE3", paddingRight: 6 }} />{" "}
              {actionsLabel[3]}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CampaignListData;
