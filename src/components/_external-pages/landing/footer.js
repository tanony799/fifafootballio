import React from "react";
import youtubeIcon from "./../../../assets/icons/youtube.svg";
import reditIcon from "./../../../assets/icons/reddit.svg";
import mediumIcon from "./../../../assets/icons/medium.svg";
import facebookIcon from "./../../../assets/icons/Facebook.svg";
import telegramIcon from "./../../../assets/icons/tele.svg";
import twitterIcon from "./../../../assets/icons/twitter.svg";
import logo from "./../../../assets/icons/logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;

  @media (max-width: 576px) {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

const Icon = styled.img`
  width: 40%;
  height: auto;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Logo = styled.img`
  width: 50%;
  height: auto;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
`;

const Text = styled.div`
  font: normal normal normal 12px/50px Poppins;
  text-align: left;
  color: white;
  line-height: 17px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font: normal normal normal 10px/20px Poppins;
    text-align: center !important;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="text-md-start text-center">
              <Logo src={logo} />
            </div>
            <Text className="pt-sm-4 pt-2">
              Contact Us <br /> admin@fifafootball.io
            </Text>
          </div>
          <div className="col-12 col-sm-6">
            <Text>Social:</Text>

            <div className="row pb-4">
              <div className="col">
                <Icon src={twitterIcon} />
              </div>
              <div className="col">
                <Icon src={telegramIcon} />
              </div>
              <div className="col">
                <Icon src={facebookIcon} />
              </div>
              <div className="col">
                <Icon src={mediumIcon} />
              </div>
              <div className="col">
                <Icon src={youtubeIcon} />
              </div>
              <div className="col">
                <Icon src={reditIcon} />
              </div>
            </div>

            <Text>@2022 FIFA Football, all rights reserved</Text>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
