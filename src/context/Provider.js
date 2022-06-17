import React, { createContext, useState, useEffect } from "react";
import { CHAIN_ID } from "./../const/const";
import { hexToNumber } from "./../web3/utils.mjs";
import {
  getAccount,
  getBalance,
  getChainId,
  initWeb3,
} from "./../web3/login.mjs";
import { isEmpty } from "lodash";

const MetaConnect = createContext();

export const MetaProvider = ({ children }) => {
  const [web3, setWeb3] = useState(initWeb3(window));
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState(null);
  const [balance, setBalance] = useState(0);

  if (typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (isEmpty(accounts)) {
        setIsConnected(false);
        setAddress("");
      } else {
        setAddress(accounts[0]);
        if (chainId === CHAIN_ID)
          getBalance(web3, accounts[0]).then((_balance) =>
            setBalance(Number(_balance) / Math.pow(10, 18))
          );
      }
    });

    window.ethereum.on("chainChanged", (_chainId) => {
      setChainId(hexToNumber(_chainId));
      if ((hexToNumber(_chainId) === CHAIN_ID) && isConnected ) {
        getBalance(web3, address).then((_balance) =>
          setBalance(Number(_balance) / Math.pow(10, 18))
        );
      }
    });
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      if (!web3) setWeb3(initWeb3(window));

      getAccount(web3).then((_accounts) => {
        if (!isEmpty(_accounts)) {
          setIsConnected(true);
          setAddress(_accounts[0]);
        }
      });

      getChainId(web3).then((_chainId) => {
        setChainId(hexToNumber(_chainId));
        if (hexToNumber(_chainId) === CHAIN_ID && isConnected)
          getBalance(web3, address).then((amount) =>
            setBalance(Number(amount) / Math.pow(10, 18))
          );
      });
    }
  }, []);

  return (
    <MetaConnect.Provider
      value={{
        isConnected,
        chainId,
        balance,
        address,
        setIsConnected,
        setChainId,
        setBalance,
        setAddress,
      }}
    >
      {children}
    </MetaConnect.Provider>
  );
};

export default MetaConnect;
