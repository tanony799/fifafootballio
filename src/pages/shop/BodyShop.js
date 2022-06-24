import React, { useContext, useState } from "react";
import styled from "styled-components";
import TOP10 from "./../../assets/shop/may_cai_the-04-3x.png";
import TOP20 from "./../../assets/shop/may_cai_the-05-3x.png";
import TOP30 from "./../../assets/shop/may_cai_the-06-3x.png";
import TOP100 from "./../../assets/shop/may_cai_the-07-3x.png";
import TOP50 from "./../../assets/shop/may_cai_the-08-3x.png";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";
import { byCard } from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import { CHAIN_ID } from "./../../const/const";
import { HeaderShop } from "./HeaderShop";
import { style } from "@mui/system";

const Wrapper = styled.div``;

const Title = styled.div`
  font: normal normal bold 15px Poppins;
  color: rgba(57, 181, 74, 1);
  text-align: center;
`;

const Content = styled.div`
  font: normal normal normal 12px Poppins;
  white-space: nowrap;
  @media (max-width: 768px) {
    font: normal normal normal 8px Poppins;
  }
`;

const WrapperBox = styled.div`
  height: 210px;
  padding: 10px;
  background-color: rgba(11, 31, 79, 1);
  border-radius: 10px;
`;

const ResponsiveImage = styled.img`
  width: 50%;
  height: auto;
  margin: 0px auto;
`;

const ResponsiveIcon = styled.img`
  width: 50%;
  height: 30px;
`;

const BodyShop = () => {
  const _meta = useContext(meta);
  const [isLoading, setIsLoading] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleByCard = async (_topKey, _amount, index) => {
    let _isLoading = [false, false, false, false, false];
    _isLoading[index] = true;
    setIsLoading(_isLoading);
    try {
      const txi = await byCard(_meta.web3, _meta.address, _topKey, _amount);
      setIsLoading([false, false, false, false, false]);
    } catch (error) {
      _isLoading[index] = false;
      setIsLoading([false, false, false, false, false]);
    }
  };

  return (
    <Wrapper>
      <HeaderShop />
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
          <div className="col">
            <WrapperBox>
              <div>
                <Title>Gold Box</Title>
              </div>
              <div>
                <ResponsiveImage src={TOP10} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>FIFA: 360/72H</Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-2 my-auto" />
                  <Content
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </Content>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP20} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP30} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP50} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
            </WrapperBox>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export { BodyShop };
