import { ReactElement } from "react";
import SecretSection from "./SecretSection";
import "./index.css";

type FooterProps = {
  isMobile: boolean;
};

const Footer = ({ isMobile }: FooterProps): ReactElement => {
  return (
    <footer>
      <div id="footer-text">Pratik Goswami, 2024</div>
      {!isMobile && <SecretSection />}
    </footer>
  );
};

export default Footer;
