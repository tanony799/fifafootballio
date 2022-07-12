import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LandingHero.css";

// material
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useMediaQuery,
} from "@mui/material";
import { varFadeInUp, varWrapEnter, MotionInView } from "../../animate";
import { MHidden } from "../../../components/@material-extend";
// icon backgroud
import backGroundIcon from "../../../assets/icons/back-ground-landing.png";
import imageLanding1 from "../../../assets/icons/landing-page-image1.png";
import imageAvatarTeam from "../../../assets/icons/avar-team.png";
import iconContact from "../../../assets/icons/contact.png";
import iconHome from "../../../assets/icons/home-white.png";
import iconPlayGame from "../../../assets/icons/game.png";
import iconShop from "../../../assets/icons/shop.png";
import iconMarket from "../../../assets/icons/market.png";
import iconIdo from "../../../assets/icons/ido.png";
import iconMyNFTS from "../../../assets/icons/my-nfts.png";
import iconDollar from "../../../assets/icons/dollar.png";
import iconPlay from "../../../assets/icons/play.png";
import iconIOS from "../../../assets/icons/ios.png";
import iconAndroid from "../../../assets/icons/android.png";
import iconDesktop from "../../../assets/icons/desktop.png";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  background: `url(${backGroundIcon})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    display: "flex",
    position: "fixed",
    alignItems: "center",
  },
}));

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

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

const CardImageStyle = styled(Box)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);
  return {
    maxWidth: 400,
    minHeight: 450,
    margin: "auto",
    textAlign: "center",
    backgroundColor: "transparent",
  };
});

const CardInfoStyle = styled(Box)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);
  return {
    minHeight: 450,
    backgroundColor: "transparent",
  };
});

const TitleStyle = styled(Typography)(({ theme }) => ({
  width: "100%",
  background:
    "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  font: "normal normal bold 40px Poppins",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  // fontFamily: "inherit",
  // fontSize: "14px",
  color: "rgba(255, 255, 255, 1)",
  // lineHeight: "17px",
  font: "normal normal 14px Poppins",
}));

const BtnContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const BtnStyle = styled("img")(({ theme }) => ({
  width: 156,
  height: 48,
  marginTop: 10,
  marginRight: 10,
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const MenuItemHomeStyle = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor: "#212B36",
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

// ----------------------------------------------------------------------

export default function LandingHero() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  // render button action
  const renderBtnAction = (item) => {
    const { icon, title, backGroundBtn } = item || {};
    return (
      <div style={{ width: 180, height: 48, marginRight: 10, marginTop: 20 }}>
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
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
          </Box>
        </ButtonAction>
      </div>
    );
  };

  // render button devices
  const renderBtnDevices = (item) => {
    const {
      icon,
      title,
      backGroundBtn,
      iconHeight = 36,
      iconWidth = 32,
    } = item || {};
    return (
      <div style={{ width: 180, height: 48 }} className="mx-auto">
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
            <img
              src={icon}
              style={{ height: iconHeight, width: iconWidth, marginRight: 10 }}
            />
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs>
                <Typography
                  style={{
                    fontSize: 20,
                    width: "100%",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    marginBottom: 0,
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  style={{
                    fontSize: 13,
                    width: "100%",
                    fontFamily: "inherit",
                    marginTop: 0,
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  {"Coming soon"}
                </Typography>
              </Grid>
            </Grid>
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
            {/* {Menu item} */}
            <MHidden width="mdDown">
              <Grid key={"NFT-MenuItem"} item xs={12} md={3}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className={"cardCenter"}>
                    <MenuItemHomeStyle>
                      <img
                        src={iconHome}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        alt="icon-home"
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"HOME"}
                      </Typography>
                    </MenuItemHomeStyle>

                    <MenuItemStyle>
                      <img
                        src={iconPlayGame}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        alt="icon-play-game"
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"PLAY GAME"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <img
                        src={iconShop}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        alt="icon-shop"
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"SHOP"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle>
                      <img
                        src={iconMarket}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        alt="icon-market"
                      />
                      <Typography
                        style={{ font: "normal normal bold 18px Poppins" }}
                      >
                        {"MARKETPLACE"}
                      </Typography>
                    </MenuItemStyle>
                    <MenuItemStyle onClick={() => navigate("/")}>
                      <img
                        src={iconIdo}
                        style={{
                          width: 18,
                          height: 16,
                          marginRight: 10,
                          marginLeft: 10,
                        }}
                        alt="icon-ido"
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
                        alt="icon-nfts"
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
                          {"WHITEPP"}
                        </Typography>
                      </a>
                    </MenuItemStyle>
                  </CardStyle>
                </MotionInView>
              </Grid>
            </MHidden>
            {/* Button connect wallet */}
            <MHidden width="mdUp" >
              <Grid
                item
                key={"Button-connect-wallet"}
                container
                direction="row"
                justifyContent="flex-end"
                className="d-sm-block d-none"
              >
                <Button
                  variant="contained"
                  style={{
                    font: "normal normal bold 14px Poppins",
                    background:
                      "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
                  }}
                >
                  CONNECT WALLET
                </Button>
              </Grid>
            </MHidden>

            <Grid key={"NFT-Info"} item xs={12} md={6} mt={3}>
              <MotionInView variants={varFadeInUp}>
                <CardInfoStyle>
                  <Typography
                    style={{
                      fontSize: 40,
                      width: "100%",
                      fontWeight: "bold",
                      font: "normal normal bold 40px Poppins",
                    }}
                  ></Typography>
                  <TitleStyle>{"FIFA FOOTBALL"}</TitleStyle>
                  <ContentStyle>
                    {
                      "Our team is excited to announce the launch of FIFA Football with 3D graphics - a world-class blockchain platform created to connect football fans across the globe more deeply with the game they love. The FIFA Football game is in the Play-To-Earn genre, where the coaches manage many different football players called NFTs and control them to take part in the matches."
                    }
                  </ContentStyle>
                  <BtnContainerStyle>
                    {renderBtnAction({
                      icon: iconDollar,
                      title: "BUY NOW",
                      backGroundBtn:
                        "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
                    })}
                    {renderBtnAction({
                      icon: iconPlay,
                      title: "WATCH TRAILER",
                      backGroundBtn:
                        "-webkit-linear-gradient(90deg, rgba(0, 174, 239, 1) 0%, rgba(28, 117, 188, 1) 100%);",
                    })}
                  </BtnContainerStyle>
                </CardInfoStyle>
              </MotionInView>
            </Grid>
            <Grid key={"NFT-Avatar"} item xs={12} md={3}>
              <MotionInView variants={varFadeInUp}>
                <CardImageStyle>
                  <img
                    src={imageLanding1}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: 20,
                      marginBottom: 30
                    }}
                    alt="imageLanding1"
                  />
                </CardImageStyle>
              </MotionInView>
            </Grid>
          </Grid>
          <Grid container spacing={isDesktop ? 10 : 5}>
            <Grid key={"NFT-MenuItem-Blank"} item xs={12} md={3}></Grid>
            <Grid key={"NFT-AvatarTeam"} item xs={12} md={4} padding={0}>
              <MotionInView variants={varFadeInUp}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <img
                    src={imageAvatarTeam}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: -70,
                      paddingBottom: 50,
                    }}
                    className="img-team"
                    alt="imgaeava-team"
                  />
                </Box>
              </MotionInView>
            </Grid>
            {/* {Info devices} */}
            <Grid key={"NFT-Info-Devices"} item xs={12} md={5} padding={0}>
              <MotionInView variants={varFadeInUp}>
                <Box>
                  <Typography
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      font: "normal normal bold 40px Poppins",
                    }}
                  >
                    {"ADVENTURE THROUGH A"}
                  </Typography>
                  <TitleStyle>{"2D UNIVERSE"}</TitleStyle>
                  <ContentStyle className="mb-sm-0 mb-4">
                    {
                      "Connect your wallet, play with your friends and socialize while making money. Whether you are solely trading your characters or rooms on the marketplace or you are more interested in battling with friends, Fifa Football has it all. Landsale coming soon!"
                    }
                  </ContentStyle>
                  <Grid container spacing={isDesktop ? 4 : 2}sx={{ marginBottom: 10 }}>
                    <Grid key={"NFT-btn-IOS"} item xs={12} md={4}>
                      {renderBtnDevices({
                        icon: iconIOS,
                        title: "iOS",
                        backGroundBtn:
                          "-webkit-linear-gradient(90deg, rgba(0, 174, 239, 1) 0%, rgba(28, 117, 188, 1) 100%);",
                      })}
                    </Grid>
                    <Grid key={"NFT-btn-Android"} item xs={12} md={4}>
                      {renderBtnDevices({
                        icon: iconAndroid,
                        title: "Android",
                        backGroundBtn:
                          "-webkit-linear-gradient(90deg, rgba(0, 174, 239, 1) 0%, rgba(28, 117, 188, 1) 100%);",
                        iconHeight: 36,
                        iconWidth: 30,
                      })}
                    </Grid>
                    <Grid key={"NFT-btn-Desktop"} item xs={12} md={4}>
                      {renderBtnDevices({
                        icon: iconDesktop,
                        title: "Desktop",
                        backGroundBtn:
                          "-webkit-linear-gradient(90deg, rgba(0, 174, 239, 1) 0%, rgba(28, 117, 188, 1) 100%);",
                        iconHeight: 28,
                        iconWidth: 42,
                      })}
                    </Grid>
                  </Grid>
                  <BtnContainerStyle></BtnContainerStyle>
                </Box>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}
