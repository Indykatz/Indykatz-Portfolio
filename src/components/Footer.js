import { Footer, FooterLinkItem } from "../css/Footer.styled";
import { Link } from "react-router-dom";

const FooterBanner = ({ name, github }) => {
  return (
    <Footer>
      <Link to="/">
        <FooterLinkItem>Katherine Ayers</FooterLinkItem>
      </Link>
      <Link to="https://github.com/Indykatz">
        <FooterLinkItem>Indykatz</FooterLinkItem>
      </Link>
    </Footer>
  );
};

export default FooterBanner;