import React, { useContext, useState } from "react";
import styled from "styled-components";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";
import { byCard } from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import { CHAIN_ID } from "./../../const/const";
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
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>GOLD BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={GOLD} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "PLATIUM BOX", price: 10, imgName: "PLATIUM" })
              }
            >
              <div>
                <Title>PLATIUM BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={PLATIUM} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>DIAMOND BOX</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={DIAMOND} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>TOP 10</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP10} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>TOP 20</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP20} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>TOP 30</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP30} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>TOP 50</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={TOP50} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
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
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
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
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
                  </WrapperPrice>
                </div>
              </div>
            </WrapperBox>
          </div>
          <div className="col">
            <WrapperBox
              onClick={(e) =>
                handleBuy({ name: "GOLD BOX", price: 20, imgName: "GOLD" })
              }
            >
              <div>
                <Title>ALL</Title>
              </div>
              <div>
                <ResponsiveImage className="hover-item" src={ALL} />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Content>#1021112661</Content>
                  <Content>
                    <span style={{ opacity: 0.7 }}>FIFA:</span>{" "}
                    <span className="fw-bold">360/72H</span>
                  </Content>
                </div>
                <div className="d-flex">
                  <ResponsiveIcon src={ICON_FF} className="me-1 my-auto" />
                  <WrapperPrice
                    className="fw-bold my-auto"
                    style={{ color: "rgba(57, 181, 74, 1)" }}
                  >
                    20
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
