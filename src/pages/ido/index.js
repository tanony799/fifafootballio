// material
import { styled } from "@mui/material/styles";
// components
import Page from "../../components/Page";
import LayoutIdo from "./LayoutIdo"

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function IdoPage() {
  return (
    <RootStyle title="FIFa Football" id="move_top">
      <LayoutIdo />
    </RootStyle>
  );
}
