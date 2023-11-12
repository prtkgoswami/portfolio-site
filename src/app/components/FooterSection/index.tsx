import { ReactElement } from "react";
import SecretSection from "./SecretSection";
import "./index.css";

type FooterSectionProps = {
  isMobile: boolean;
};

const FooterSection = ({ isMobile }: FooterSectionProps): ReactElement => {
  return (
    <footer>
      <div id="footer-text">Pratik Goswami, 2023</div>
      {!isMobile && <SecretSection />}
    </footer>
  );
};

export default FooterSection;
