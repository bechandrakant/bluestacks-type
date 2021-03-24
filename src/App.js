import React, { useState } from "react";
import AppBar from "./components/AppBar";
import Nav from "./components/Nav";
import "./App.css";
import { appData } from "./constants/appData";
import LanguageSelector from "./components/LanguageSelector";
import Campaigns from "./components/Campaigns";

function App() {
  const [language, setLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState("upcomingCampaigns");

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
          updateActiveTab={(tab) => setActiveTab(tab)}
        />
      </section>
      <Campaigns language={language} status={activeTab} />
    </div>
  );
}

export default App;
