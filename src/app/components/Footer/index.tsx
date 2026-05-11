import "./index.css";

type FooterProps = {
  footerText?: string;
};

function Footer({ footerText }: FooterProps) {
  return (
    <footer>
      <div id="footer-text">{footerText}</div>
    </footer>
  );
}

export default Footer;
