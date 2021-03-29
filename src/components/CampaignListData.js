import React, { useState } from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PopUp from "./PopUp";
import DatePicker from "./DatePicker";

const CampaignListData = ({ language, data, actionsLabel, scheduleDate }) => {
  const [open, setOpen] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <>
      {open === true ? (
        <PopUp data={data} close={() => setOpen(false)} language={language} />
      ) : null}
      {openDatePicker === true ? (
        <DatePicker
          scheduleDate={(timestamp) => {
            scheduleDate(timestamp, data.id);
            setOpenDatePicker(false);
          }}
          close={() => setOpenDatePicker(false)}
        />
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
              {new Date(data.scheduledOn)
                .add(-1)
                .day()
                .toString("MMM yyyy, dd")}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "#9CA2B7",
                margin: 4,
              }}
            >
              {Math.abs(Math.floor((data.scheduledOn - Date.now()) / 86400000))}
              {Math.floor((data.scheduledOn - Date.now()) / 86400000) > 0
                ? " days ahead"
                : " days ago"}
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
              onClick={() => setOpenDatePicker(true)}
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
