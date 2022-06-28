import {
  FIFA_TOKEN,
  FIFA_SALE,
  FIFA_NFT,
  AMOUNT_APPROVE,
  BASE_URL,
} from "./../const/const";
import { FIFA_TOKEN_ABI, FIFA_SALE_ABI } from "./abi.mjs";
import { genContract, approve, allowance } from "./utils.mjs";

const approveFIFA = async (_web3, _from) => {
  return await approve(
    _web3,
    FIFA_TOKEN_ABI,
    FIFA_TOKEN,
    _from,
    FIFA_SALE,
    AMOUNT_APPROVE
  );
};

const allowanceFIFA = async (_web3, _from) => {
  return await allowance(_web3, FIFA_TOKEN_ABI, FIFA_TOKEN, FIFA_SALE, _from);
};

const byCard = async (_web3, _from, _topKey, _amountItems) => {
  const txi = {};

  const ctract = await genContract(_web3, FIFA_SALE_ABI, FIFA_SALE);

  const _allowance = await allowanceFIFA(_web3, _from);

  if (Number(_allowance) <= 0) await approveFIFA(_web3, _from);

  await ctract.methods
    .buyCard(_topKey, _amountItems)
    .send({ from: _from })
    .then((e) => {
      if (e["status"]) {
        txi["status"] = "success";
      } else {
        txi["status"] = "fail";
      }
    })
    .catch((e) => {
      if (e["code"] === 4001) {
        txi["status"] = "reject";
      } else {
        txi["status"] = "fail";
      }
    });
  return txi;
};

export { byCard, approveFIFA };
