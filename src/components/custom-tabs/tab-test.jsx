import React from "react";
import Tabs from "./tabs";
import "./style.css";

function RandomComponent() {
  return (
    <div>
      <h1>Random Component</h1>
    </div>
  );
}   

export default function TabTest() {
  const tabsContent = [
    {
      label: "Tab 1",
      content: "Tab 1 content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 content",
    },
    {
      label: "Tab 3",
      content: "Tab 3 content",
    },
    {
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];

  function handleChange(index) {
    console.log(index);
  }

  return (
    <div>
      <Tabs tabsContent={tabsContent} onChange={handleChange} />
    </div>
  );
}
