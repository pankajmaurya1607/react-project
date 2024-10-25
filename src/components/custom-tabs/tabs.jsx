import React, { useState } from "react";  

export default function Tabs({ tabsContent, onChange }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleOnClick(index) {
    setActiveTab(index);
    onChange(index);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[activeTab] ? (
          <div>{tabsContent[activeTab].content}</div>
        ) : null}
      </div>
    </div>
  );
}
