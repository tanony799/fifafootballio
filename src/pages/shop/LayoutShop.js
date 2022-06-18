import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useMediaQuery,
  Divider,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import {
  varFadeInUp,
  varWrapEnter,
  MotionInView,
} from "../../components/animate";
import { MHidden } from "../../components/@material-extend";
import backGroundIcon from "../../assets/icons/back-ground-landing.png";
import iconContact from "../../assets/icons/contact.png";
import iconHome from "../../assets/icons/home-white.png";
import iconPlayGame from "../../assets/icons/game.png";
import iconShop from "../../assets/icons/shop.png";
import iconMarket from "../../assets/icons/market.png";
import iconIdo from "../../assets/icons/ido.png";
import iconMyNFTS from "../../assets/icons/my-nfts.png";
import iconDollar from "../../assets/icons/dollar.png";

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  background: `url(${backGroundIcon})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    position: "fixed",
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(1, 1, 0),
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -50 },
      backgroundColor: "rgba(9, 20, 48, 1)",
      maxWidth: 534,
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        backgroundColor: "rgba(9, 20, 48, 1)",
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
      },
    },
  };
});

const CardInfoStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);
  return {
    minHeight: 450,
    margin: "auto",
    textAlign: "center",
    opacity: 0.6,
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      backgroundColor: "rgba(9, 20, 48, 1)",
      boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
    },
  };
});

const MenuItemShopStyle = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: "9px",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  marginBottom: 10,
  background:
    "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const MenuItemStyle = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#212B36",
  borderRadius: "9px",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 5,
  marginBottom: 10,
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const ButtonAction = styled(Box)(({ backGroundCus }) => ({
  display: "flex",
  borderRadius: "9px",
  width: "100%",
  height: "100%",
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: 10,
  marginBottom: 5,
  padding: 10,
  background: `${backGroundCus}`,
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const SpaceBetweenContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));

const AmountTranferContainer = styled("div")(({ theme }) => ({
  display: "flex",
  direction: "column",
}));

const FormContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(3),
}));

export default function LayoutIdo() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();
  const [valAmount, setValAmount] = useState("");

  const handleChangeInput = (e) => {
    setValAmount(e.target.value);
  };

  const renderBtnAction = (item) => {
    const { icon, title, backGroundBtn } = item || {};
    return (
      <div
        style={{
          width: "100%",
          height: 48,
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
        }}
      >
        <ButtonAction backGroundCus={backGroundBtn}>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <img src={icon} style={{ height: 16, width: 10, marginRight: 5 }} />
            <Typography
              style={{
                width: "100%",
                fontFamily: "inherit",
                font: "normal normal bold 16px Poppins",
              }}
            >
              {title}
            </Typography>
          </Box>
        </ButtonAction>
      </div>
    );
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="xl" sx={{ marginTop: 10 }}>
          <Grid container spacing={isDesktop ? 15 : 5}>
            <MHidden width="mdDown">
              <Grid key={"NFT-MenuItem"} item xs={12} md={3} mt={3}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className={"cardCenter"}>
                    <MenuItemStyle onClick={() => navigate("/")}>
                      <img
                        src={iconHome}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"HOME"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <img
                        src={iconPlayGame}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"PLAY GAME"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemShopStyle>
                      <img
                        src={iconShop}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"SHOP"}
                      </Typography>
                    </MenuItemShopStyle>
                    <MenuItemStyle>
                      <img
                        src={iconMarket}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"MARKETPLACE"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <img
                        src={iconIdo}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"IDO"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <img
                        src={iconMyNFTS}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"MY NFTS"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <a
                        href="https://docs.fifafootball.io"
                        style={{
                          textDecoration: "none",
                          color: "#ffffff",
                        }}
                        className="d-flex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={iconContact}
                          style={{
                            width: 18,
                            height: 16,
                            marginRight: 10,
                            marginLeft: 10,
                          }}
                          className="my-auto"
                          alt="iconContact"
                        />
                        <Typography
                          style={{
                            font: "normal normal bold 18px Poppins",
                            textDecoration: "none !important",
                          }}
                        >
                          {"INTRODUCTION"}
                        </Typography>
                      </a>
                    </MenuItemStyle>
                  </CardStyle>
                </MotionInView>
              </Grid>
            </MHidden>

            <Grid key={"NFT-Info"} item xs={12} md={8} mt={3}>
              <MotionInView variants={varFadeInUp}>
               
              {/* YOUR CODE HERE */}

              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}
