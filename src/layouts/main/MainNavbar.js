import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import Label from "../../components/Label";
import { MHidden } from "../../components/@material-extend";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobileCustom from "./MenuMobileCustom";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import navMobileConfig from "./MenuMobileConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  // boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.16)",
          height: { md: APP_BAR_DESKTOP - 16 },
        }}
        // sx={{
        //   ...(isOffset && {
        //     // bgcolor: 'background.default',
        //     bgcolor: 'rgba(255, 255, 255, 1)',
        //     height: { md: APP_BAR_DESKTOP - 16 }
        //   })
        // }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <RouterLink to="/">
            <Logo />
          </RouterLink> */}
          <MHidden width="mdUp">
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>
          <MHidden width="mdDown">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </MHidden>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>

          {/* <Button variant="contained" target="_blank" href="https://material-ui.com/store/items/minimal-dashboard/"> */}
          <MHidden width="mdDown">
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
          </MHidden>
          <MHidden width="mdUp">
            <Button
              variant="contained"
              style={{
                font: "normal normal bold 10px Poppins",
                background:
                  "-webkit-linear-gradient(112deg, rgba(141, 198, 63, 1) 0%, rgba(57, 181, 74, 1) 100%)",
              }}
            >
              CONNECT WALLET
            </Button>
            {/* <MenuMobileCustom
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navMobileConfig}
            /> */}
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
