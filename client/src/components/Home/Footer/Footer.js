import { Link } from 'react-router-dom';
import { FooterContainer } from './style';

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer-logo">
          <Link to="/">
            <svg aria-hidden="true" width="32" height="37" viewBox="0 0 32 37">
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
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
