import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

// Single selection
//

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiSelectionData, setMultiSelectionData] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiSelectionData = [...multiSelectionData];

    const indexOfCurrentId = cpyMultiSelectionData.indexOf(getCurrentId);

    if (indexOfCurrentId === -1) {
      cpyMultiSelectionData.push(getCurrentId);
    } else {
      cpyMultiSelectionData.splice(indexOfCurrentId, 1);
    }
    setMultiSelectionData(cpyMultiSelectionData);
  }

  console.log(selected, multiSelectionData);

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multiSelection
                ? multiSelectionData.includes(dataItem.id) && (
                    <div className="content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}
