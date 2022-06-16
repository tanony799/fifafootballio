import React, { createContext, useState } from "react";

const MetaConnect = createContext();

export const MetaProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [chainId, setChainId] = useState(1);
  const [balance, setBalance] = useState(0);

  return (
    <MetaConnect.Provider
      value={{
        isConnected,
        chainId,
        balance,
        setIsConnected,
        setChainId,
        setBalance,
      }}
    >
      {children}
    </MetaConnect.Provider>
  );
};

export default MetaConnect;
