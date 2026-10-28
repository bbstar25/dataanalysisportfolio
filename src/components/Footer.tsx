import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Adepoju<span>.</span>
        </a>

        <p>
          Turning data into insights and insights into better decisions.
        </p>

        <a href="#home" className="back-to-top">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ADEPOJU MOSURO-BURIAMO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;