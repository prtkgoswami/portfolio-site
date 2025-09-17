import { ReactElement } from "react";
import SecretSection from "./SecretSection";
import "./index.css";

type FooterProps = {
  isMobile: boolean;
  footerText?: string;
};

const Footer = ({ isMobile , footerText}: FooterProps): ReactElement => {
  return (
    <footer>
      <div id="footer-text">{footerText}</div>
      {false && <SecretSection />}
    </footer>
  );
};

export default Footer;
