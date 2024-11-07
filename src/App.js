import "./App.css";
// import Accordian from "./components/accordian";
// import ImageSlider from "./components/image-slider";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import LoadMoreData from "./components/load-more-button";
// import TreeView from "./components/tree-view";
// import sideMenu from "./components/tree-view/data";
// import QrCodeGenerator from "./components/qr-code-generator";
// import LightDarkMode from "./components/light-dark-mode"
// import ScrollIndicator from "./components/scroll-indicator";
// import TabTest from "./components/custom-tabs/tab-test";
// import ModalTest from "./components/custom-modal-popup/modal-test";
// import GithubProfileFinder from "./components/github-profile-finder";
// import SearchAutoComplete from "./components/search-autocomplete-with-api";
// import TicTacToe from "./components/tic-tac-toe";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
// import FeatureFlag from "./components/feature-flag";
// import UseFetchHookTest from "./components/use-fetch/text";
// import UseOnClickOutsideTest from "./components/use-outside-click/test";
// import UseWindowResizeTest from "./components/use-window-resize/test"
// import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom"
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */} 
      {/* <Accordian/> */}

      {/* random color component */}
      {/* <RandomColor/> */}

      {/* star rating component */}
      {/* <StarRating noOfStars={5}/> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more product component */}
      {/* <LoadMoreData/> */}

      {/* Tree View */}
      {/* <TreeView menus={sideMenu}/> */}

      {/* QR Code Generator */}
      {/* <QrCodeGenerator/> */}

      {/* light and dark mode switch */}
      {/* <LightDarkMode/> */}

      {/* scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom Tabs */}
      {/* <TabTest/> */}

      {/* Custom Modal Popup */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search AutoComplete */}
      {/* <SearchAutoComplete/> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe/> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick Outside Hook */}
      {/* <UseOnClickOutsideTest/> */}

      {/* Use Window resize hook */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll To Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to particular section */}
      <ScrollToSection/>

    </div>
  );
}

export default App;
