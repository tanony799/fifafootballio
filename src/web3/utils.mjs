import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const hexToNumber = (_hexCode) => {
  return web3.utils.hexToNumber(_hexCode);
};

export { hexToNumber };
