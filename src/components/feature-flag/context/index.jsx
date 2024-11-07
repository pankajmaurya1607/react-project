import { createContext, useEffect, useState } from "react";
import featuresFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext();

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeaturesFlags() {
    try {
      setLoading(true);
      const response = await featuresFlagsDataServiceCall();      
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error.message || 'Failed to fetch feature flags');
    }

  }

  // console.log(enabledFlags);
  useEffect(() => {
    fetchFeaturesFlags();
  }, []); // Missing dependency array causing infinite loop

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}