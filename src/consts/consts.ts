import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import SpeakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

export const products = [
  { name: "home", url: "/" },
  { name: "headphones", url: "category/headphones", img: HeadphonesThumbnail },
  { name: "speakers", url: "category/speakers", img: SpeakersThumbnail },
  { name: "earphones", url: "category/earphones", img: EarphonesThumbnail },
];

export const socials = [
  { name: "facebook", url: "https://www.facebook.com", img: Facebook },
  { name: "twitter", url: "https://www.twitter.com", img: Twitter },
  { name: "instagram", url: "https://www.instagram.com", img: Instagram },
];
