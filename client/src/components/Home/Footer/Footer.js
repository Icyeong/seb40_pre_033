import { Link } from 'react-router-dom';
import { FooterBigSvg } from '../../../assets/images/HomeSvg';
import { FooterContainer } from './style';

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer-logo">
          <Link to="/">
            <FooterBigSvg />
          </Link>
        </div>
        <nav className="footer-nav">
          <div className="footer-column">
            <h5>
              <a href="/">STACK OVERFLOW</a>
            </h5>
            <ul>
              <li>
                <a href="/">Questions</a>
              </li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>PRODUCTS</h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>
              <a href="https://stackoverflow.co/">COMPANY</a>
            </h5>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>
              <a href="https://stackexchange.com/">STACK EXCHANGE NETWORK</a>
            </h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </div>
        </nav>
        <div className="footer-copyright">
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
          <p>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. <span>rev 2022.10.26.12345</span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};
