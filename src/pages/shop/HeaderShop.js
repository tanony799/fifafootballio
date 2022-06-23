import React from "react";
import styled from "styled-components";
import ICON_BNB from "./../../assets/shop/icon-token-bnb.png";
import ICON_FIFA from "./../../assets/shop/icon-token-fifa.png";
import ICON_$ from "./../../assets/shop/group_656-2x.png";

const Wrapper = styled.div`
  background-color: #0b1f4f;
  width: 100%;
  margin-bottom: 30px;
  padding: 20px 40px;
  border-radius: 10px;
  display: flex;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const ImgResponsive = styled.img`
  width: 100%;
  height: 50px;
  margin: auto;
  @media (max-width: 768px) {
    width: 30%;
    height: 40px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const WrapperGroup = styled.div`
  display: flex;
  padding: 0px 0px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Divider = styled.div`
  margin: auto 15px;
  border-left: 1px solid white;
  width: 1px;
  height: 65px;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const TokenName = styled.div`
  font: normal normal bold 18px Poppins;
  color: #8dc63f;

  @media (max-width: 768px) {
    font: normal normal bold 14px Poppins;
  }
`;

const Balance = styled.div`
  font: normal normal bold 40px Poppins;
  color: white;
  @media (max-width: 768px) {
    font: normal normal bold 28px Poppins;
  }
`;

const Btn = styled.div`
  font: normal normal bold 16px Poppins;
  border-radius: 10px;
  border: 1px solid #5abc45;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Icon = styled.img`
  width: 20% !important;
  height: auto;
`;

export const HeaderShop = () => {
  return (
    <Wrapper>
      <WrapperGroup className="me-1 me-md-5 justify-content-center">
        <ImgResponsive src={ICON_FIFA} />
        <Divider />
        <div>
          <TokenName className="mt-2">FIFA</TokenName>
          <Balance>0</Balance>
        </div>
      </WrapperGroup>
      <WrapperGroup className="ms-1 ms-md-5 justify-content-center">
        <ImgResponsive src={ICON_BNB} />
        <Divider />
        <div>
          <TokenName className="mt-2 text-warning">BNB</TokenName>
          <Balance>0</Balance>
        </div>
      </WrapperGroup>
      <div className="w-100 h-100 my-auto d-sm-none d-none d-md-block">
        <div className="d-flex justify-content-end">
          <Btn>
            <Icon src={ICON_$} /> CONVERT
          </Btn>
        </div>
      </div>
    </Wrapper>
  );
};
