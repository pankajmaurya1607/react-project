const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
};

function featuresFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(() => resolve(dummyApiResponse), 500)
    } else {
      reject("Some Error Occurred! please try again");
    }
  });
}

export default featuresFlagsDataServiceCall;