import { useContext } from "react";
import { FeatureFlagContext } from "./context";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";

export default function FeatureFlag() {
  const { loading, enabledFlag } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlag && enabledFlag[getCurrentKey];
  }

  console.log(enabledFlag)


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem, index) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={index}>{componentItem.component}</div>
        ) : null   
      )}
    </div>
  );
}