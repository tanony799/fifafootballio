import React, { useContext, useState } from "react";
import styled from "styled-components";
import TOP10 from "./../../assets/shop/may_cai_the-04-3x.png";
import TOP20 from "./../../assets/shop/may_cai_the-05-3x.png";
import TOP30 from "./../../assets/shop/may_cai_the-06-3x.png";
import TOP100 from "./../../assets/shop/may_cai_the-07-3x.png";
import TOP50 from "./../../assets/shop/may_cai_the-08-3x.png";
import { byCard } from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import { CHAIN_ID } from "./../../const/const";
import { HeaderShop } from "./HeaderShop";

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
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP10} />
              {_meta.isConnected && _meta.chainId === CHAIN_ID ? (
                isLoading[0] ? (
                  <Btn>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </Btn>
                ) : (
                  <Btn onClick={() => handleByCard(10, 1, 0)}>BUY BOX 1BNB</Btn>
                )
              ) : (
                <Btn style={{ opacity: 0.7 }}>BUY BOX 1BNB</Btn>
              )}
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP20} />
              {_meta.isConnected && _meta.chainId === CHAIN_ID ? (
                isLoading[1] ? (
                  <Btn>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </Btn>
                ) : (
                  <Btn onClick={() => handleByCard(20, 1, 1)}>BUY BOX 1BNB</Btn>
                )
              ) : (
                <Btn style={{ opacity: 0.7 }}>BUY BOX 1BNB</Btn>
              )}
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP30} />
              {_meta.isConnected && _meta.chainId === CHAIN_ID ? (
                isLoading[2] ? (
                  <Btn>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </Btn>
                ) : (
                  <Btn onClick={() => handleByCard(30, 1, 2)}>BUY BOX 1BNB</Btn>
                )
              ) : (
                <Btn style={{ opacity: 0.7 }}>BUY BOX 1BNB</Btn>
              )}
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP50} />
              {_meta.isConnected && _meta.chainId === CHAIN_ID ? (
                isLoading[3] ? (
                  <Btn>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </Btn>
                ) : (
                  <Btn onClick={() => handleByCard(50, 1, 3)}>BUY BOX 1BNB</Btn>
                )
              ) : (
                <Btn style={{ opacity: 0.7 }}>BUY BOX 1BNB</Btn>
              )}
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox>
              <ResponsiveImage src={TOP100} />
              {_meta.isConnected && _meta.chainId === CHAIN_ID ? (
                isLoading[4] ? (
                  <Btn>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </Btn>
                ) : (
                  <Btn onClick={() => handleByCard(100, 1, 4)}>
                    BUY BOX 1BNB
                  </Btn>
                )
              ) : (
                <Btn style={{ opacity: 0.7 }}>BUY BOX 1BNB</Btn>
              )}
            </WrapperBox>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export { BodyShop };
