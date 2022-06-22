import React from "react";
import styled from "styled-components";
import ICON_BNB from "./../../assets/shop/icon-token-bnb.png";
import ICON_FIFA from "./../../assets/shop/icon-token-fifa.png";

const Wrapper = styled.div`
  background-color: #0b1f4f;
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
`;

const ImgResponsive = styled.img`
  width: 100%;
  height: 50px;
  margin: auto;
`;

const WrapperGroup = styled.div`
  display: flex;
  padding: 0px 40px;
`;

const Divider = styled.div`
  margin: auto 15px;
  border-left: 1px solid white;
  width: 1px;
  height: 65px;
`;

const TokenName = styled.div`
  font: normal normal bold 18px Poppins;
  color: #8dc63f;
`;

const Balance = styled.div`
  font: normal normal bold 40px Poppins;
  color: white;
`;

export const HeaderShop = () => {
  return (
    <Wrapper>
      <WrapperGroup>
        <ImgResponsive src={ICON_FIFA} />
        <Divider />
        <div>
          <TokenName className="mt-2">FIFA</TokenName>
          <Balance>0</Balance>
        </div>
      </WrapperGroup>
      <WrapperGroup>
        <ImgResponsive src={ICON_BNB} />
        <Divider />
        <div>
          <TokenName className="mt-2 text-warning">BNB</TokenName>
          <Balance>0</Balance>
        </div>
      </WrapperGroup>
    </Wrapper>
  );
};
