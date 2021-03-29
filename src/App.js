import React, { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import Nav from "./components/Nav";
import "./App.css";
import { appData } from "./constants/appData";
import LanguageSelector from "./components/LanguageSelector";
import CampaignList from "./components/CampaignList";
import { db } from "./db/firebaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [language, setLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState("upcomingCampaigns");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    db.collection("appData")
      .doc("zxa4t3xqIJPQnzKs78SM")
      .get()
      .then((doc) => {
        let campaignData = doc.data();
        setData(Object.values(campaignData));
        setLoading(false);
      });
  };

  // Gets latest data from firebase and then updates it
  const scheduleDate = (timestamp, id) => {
    setLoading(true);
    db.collection("appData")
      .doc("zxa4t3xqIJPQnzKs78SM")
      .get()
      .then((doc) => {
        let data = Object.values(doc.data());
        let newData = {};
        data.forEach((d, index) => {
          if (d.id === id) {
            d.scheduledOn = +Date.parse(timestamp);
          }
          newData[index] = d;
        });
        db.collection("appData")
          .doc("zxa4t3xqIJPQnzKs78SM")
          .set(newData)
          .then(() => {
            setData(Object.values(newData));
            setLoading(false);
          });
      });
  };

  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <div className="App">
      <AppBar />
      <section className="container">
        <div style={{ display: "flex" }}>
          <h1 style={{ display: "inline", flex: 1 }}>
            {appData.title[language]}
          </h1>
          <LanguageSelector handleLanguageChange={handleLanguageChange} />
        </div>
      </section>
      <section>
        <Nav
          lang={language}
          activeTab={activeTab}
          updateActiveTab={(tab) => {
            setData(data);
            setActiveTab(tab);
          }}
        />
      </section>
      {loading === true ? (
        <div
          className="container"
          style={{ width: "20%", margin: "auto", padding: 30 }}
        >
          <CircularProgress />
        </div>
      ) : (
        <CampaignList
          language={language}
          headers={appData.headers[language]}
          data={data}
          actionsLabel={appData.actions[language]}
          activeTab={activeTab}
          scheduleDate={scheduleDate}
        />
      )}
    </div>
  );
}

export default App;
