// Icon
import youtubeIcon from "../../assets/icons/youtube.svg";
import reditIcon from "../../assets/icons/reddit.svg";
import facebookIcon from "../../assets/icons/Facebook.svg";
import telegramIcon from "../../assets/icons/tele.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

// ----------------------------------------------------------------------

const ICON_YOUTUBE_SIZE = {
  width: 24,
  height: 16,
};

const ICON_INSTAGRAM_SIZE = {
  width: 16,
  height: 16,
};

const ICON_FACEBOOK_SIZE = {
  width: 16,
  height: 16,
};

const ICON_TELEGRAM_SIZE = {
  width: 16,
  height: 16,
};

const ICON_TWITTER_SIZE = {
  width: 20,
  height: 16,
};

const menuMobileConfig = [
  {
    title: "twitter",
    icon: <img src={twitterIcon} {...ICON_TWITTER_SIZE} alt="" />,
    path: "https://twitter.com/FiFaFootball_io",
  },
  {
    title: "Telegram",
    icon: <img src={telegramIcon} {...ICON_TELEGRAM_SIZE} alt="" />,
    path: "https://t.me/FiFaFootballChannel",
  },
  {
    title: "Facebook",
    icon: <img src={facebookIcon} {...ICON_FACEBOOK_SIZE} alt="" />,
    path: "https://www.facebook.com/FiFafootball.io",
  },
  {
    title: "Redit",
    icon: <img src={reditIcon} {...ICON_INSTAGRAM_SIZE} alt="" />,
    path: "https://www.reddit.com/r/FiFafootball2022",
  },
  {
    title: "Youtube",
    icon: <img src={youtubeIcon} {...ICON_YOUTUBE_SIZE} alt="" />,
    path: "https://www.youtube.com/watch?v=MbI1qYA-4IE",
  },
];

export default menuMobileConfig;
