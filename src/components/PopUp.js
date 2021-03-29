import React from "react";
import DatePicker from "./DatePicker";

const PopUp = ({ data, language, close }) => {
  const { image_url, name, region, price } = data;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: 999,
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          width: "400px",
          margin: "auto",
          backgroundColor: "#FFF",
          padding: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={image_url}
            alt={name[language]}
            style={{ height: 137, width: 137 }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "baseline",
            }}
          >
            <span style={{ fontWeight: 400, margin: 4 }}>{name[language]}</span>
            <span
              style={{
                fontSize: "14px",
                fontStyle: "italic",
                color: "#9CA2B7",
                margin: 4,
              }}
            >
              {region}
            </span>
          </div>
        </div>
        <h3>Pricing</h3>
        <div>
          {Object.keys(price).map((key) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0px",
                }}
              >
                <div>{key}</div>
                <div>{price[key]}</div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #202640",
              color: "#202640",
              fontWeight: 700,
            }}
            onClick={close}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
