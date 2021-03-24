import React, { useState } from "react";

const LanguageSelector = ({ handleLanguageChange }) => {
  const [lang, setLang] = useState("english");

  return (
    <select
      value={lang}
      onChange={(e) => {
        let currentLang = e.target.value;
        setLang(currentLang)
        handleLanguageChange(currentLang);
      }}
    >
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;
