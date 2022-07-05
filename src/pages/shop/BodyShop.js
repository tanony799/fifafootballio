import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";
import { buyCard } from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import {
  CHAIN_ID,
  TOP_10_PRICE,
  TOP_20_PRICE,
  TOP_30_PRICE,
  TOP_50_PRICE,
  TOP_100_PRICE,
  TOP_200_PRICE,
  DIAMOND_PRICE,
  GOLD_PRICE,
  PLATIUM_PRICE,
  ALL_PRICE,
} from "./../../const/const";

import { HeaderShop } from "./HeaderShop";
import DIAMOND from "./../../assets/shop-1/diamond.png";
import GOLD from "./../../assets/shop-1/gold.png";
import PLATIUM from "./../../assets/shop-1/platium.png";
import TOP10 from "./../../assets/shop-1/10.png";
import TOP20 from "./../../assets/shop-1/20.png";
import TOP30 from "./../../assets/shop-1/30.png";
import TOP50 from "./../../assets/shop-1/50.png";
import TOP100 from "./../../assets/shop-1/100.png";
import TOP200 from "./../../assets/shop-1/200.png";
import ALL from "./../../assets/shop-1/all.png";

import {
  getPriceTop10,
  getPriceTop20,
  getPriceTop30,
  getPriceTop50,
  getPriceTop100,
  getPriceTop200,
} from "./../../web3/shop.mjs";

import { ModalBuy } from "./modal";

const Wrapper = styled.div``;

const Title = styled.div`
  font: normal normal bold 15px Poppins;
  color: #86c540;
  text-align: center;
`;

const Content = styled.div`
  font: normal normal normal 12px Poppins;
  white-space: nowrap;
  @media (max-width: 768px) {
    font: normal normal normal 8px Poppins;
  }
`;

const WrapperPrice = styled.div`
  font: normal normal normal 14px Poppins;
  white-space: nowrap;
  @media (max-width: 768px) {
    font: normal normal normal 12px Poppins;
  }
`;

const WrapperBox = styled.div`
  // height: 210px;
  padding: 10px;
  background-color: rgba(11, 31, 79, 1);
  border-radius: 10px;
  &: hover {
    cursor: pointer;
    .hover-item {
      transform: scale(1.1);
    }
  }
`;

const ResponsiveImage = styled.img`
  width: 50%;
  height: auto;
  margin: 0px auto;
`;

const ResponsiveIcon = styled.img`
  width: 50%;
  height: 20px;
`;

const BodyShop = () => {
  const _meta = useContext(meta);
  const [isBuying, setIsBuying] = useState(false);
  const [dataBuy, setDataBuy] = useState({});
  const [isLoading, setIsLoading] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [price, setPrice] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    

  }, []);

  const handleByCard = async (_topKey, _amount, index) => {
    let _isLoading = [false, false, false, false, false];
    _isLoading[index] = true;
    setIsLoading(_isLoading);
    try {
      const txi = await buyCard(_meta.web3, _meta.address, _topKey, _amount);
      setIsLoading([false, false, false, false, false]);
    } catch (error) {
      _isLoading[index] = false;
      setIsLoading([false, false, false, false, false]);
    }
  };

  const handleBuy = (_dataBuy) => {
    setIsBuying(true);
    setDataBuy(_dataBuy);
  };

  const handleClose = () => {
    setIsBuying(false);
  };

  return (
    <Wrapper>
      <HeaderShop />
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "gold", price: GOLD_PRICE })}
            >
              <div>
                <Title>GOLD BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={GOLD} />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <Content>#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {GOLD_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({
                  key: "platium",
                  price: PLATIUM_PRICE,
                })
              }
            >
              <div>
                <Title>PLATIUM BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={PLATIUM} />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <Content>#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {PLATIUM_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ key: "diamond", price: DIAMOND_PRICE })
              }
            >
              <div>
                <Title>DIAMOND BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={DIAMOND} />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <Content>#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {DIAMOND_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "top10", price: TOP_10_PRICE })}
            >
              <div>
                <Title>TOP 10</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP10} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_10_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "top20", price: TOP_20_PRICE })}
            >
              <div>
                <Title>TOP 20</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP20} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_20_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "top30", price: TOP_30_PRICE })}
            >
              <div>
                <Title>TOP 30</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP30} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_30_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "top50", price: TOP_50_PRICE })}
            >
              <div>
                <Title>TOP 50</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP50} />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <Content>#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_50_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ key: "top100", price: TOP_100_PRICE })
              }
            >
              <div>
                <Title>TOP 100</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP100} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_100_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ key: "top200", price: TOP_200_PRICE })
              }
            >
              <div>
                <Title>TOP 200</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP200} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {TOP_200_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) => handleBuy({ key: "all", price: ALL_PRICE })}
            >
              <div>
                <Title>ALL</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={ALL} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content className="d-flex align-items-center">#1021112661</Content>
                  {/* <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content> */}
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    {ALL_PRICE}
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
        </div>
      </div>
      <ModalBuy
        isOpen={isBuying}
        dataBuy={dataBuy}
        onClose={(e) => handleClose()}
      />
    </Wrapper>
  );
};

export { BodyShop };
