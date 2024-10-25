import { useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from "react-icons/fa"

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  /**
   * Toggles the display of the children for the menu item with the given label.
   *
   * @param {string} getCurrentLabel - The label of the menu item whose children should be toggled.
   * @returns {function} - A function that can be called to toggle the display of the children.
   */
  function handleToggleChildren(getCurrentLabel) {
    return () => {
      setDisplayCurrentChildren((prevState) => ({
        ...prevState,
        [getCurrentLabel]: !prevState[getCurrentLabel],
      }));
    };
  }

  console.log(displayCurrentChildren);

  return (
    <>
      <li>
        <div className="menu-item">
          <p>{item.label}</p>
          {item && item.children && item.children.length > 0 ? (
            <span onClick={handleToggleChildren(item.label)}>
                {
                    displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>
                }
            </span>
          ) : null}
        </div>

        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
}
