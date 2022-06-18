import React from "react";
import styled from "styled-components";
import TOP10 from "./../../assets/shop/may_cai_the-04-3x.png";
import TOP20 from "./../../assets/shop/may_cai_the-05-3x.png";
import TOP30 from "./../../assets/shop/may_cai_the-06-3x.png";
import TOP100 from "./../../assets/shop/may_cai_the-07-3x.png";
import TOP50 from "./../../assets/shop/may_cai_the-08-3x.png";
import { byBox } from "./../../web3/shop.mjs";

const Wrapper = styled.div``;

const Title = styled.div`
  font: normal normal bold 30px Poppins;
  color: rgba(57, 181, 74, 1);
`;

const WrapperBox = styled.div`
  height: 210px;
  padding: 20px;
  position: relative;
  background-color: rgba(11, 31, 79, 1);
  border-radius: 10px;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0px auto;
`;

const Btn = styled.div`
  font: normal normal bold 15px Poppins;
  width: 130px;
  padding: 5px 0px;
  height: auto;
  text-align: center;
  background-color: rgba(57, 181, 74, 1);
  white-space: nowrap;
  border-radius: 5px;
  &: hover {
    cursor: pointer;
  }
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BodyShop = () => {
  const handleByBox = async () => {
    try {
      const txi = await byBox(1, 1);
      console.log("txi=>", txi);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Wrapper>
      <Title className="mb-3">BOX RAFFLE</Title>
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP10} />
              <Btn onClick={() => handleByBox(10)}>BUY BOX 1BNB</Btn>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP20} />
              <Btn onClick={() => handleByBox(20)}>BUY BOX 1BNB</Btn>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP30} />
              <Btn onClick={() => handleByBox(30)}>BUY BOX 1BNB</Btn>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP50} />
              <Btn onClick={() => handleByBox(50)}>BUY BOX 1BNB</Btn>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
              <Btn onClick={() => handleByBox(100)}>BUY BOX 1BNB</Btn>
            </WrapperBox>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export { BodyShop };
