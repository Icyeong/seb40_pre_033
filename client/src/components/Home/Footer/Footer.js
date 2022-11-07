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
              <Link to="/">STACK OVERFLOW</Link>
            </h5>
            <ul>
              <li>
                <Link to="/">Questions</Link>
              </li>
              <li>
                <a href="https://stackoverflow.com/help">Help</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>PRODUCTS</h5>
            <ul>
              <li>
                <a href="https://stackoverflow.com/teams">Teams</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/advertising">Advertising</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/collectives">Collectives</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/talent">Talent</a>
                Talent
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>
              <a href="https://stackoverflow.co/">COMPANY</a>
            </h5>
            <ul>
              <li>
                <a href="https://stackoverflow.co/">About</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/press">Press</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/work-here">
                  Work Here
                </a>
              </li>
              <li>Legal</li>
              <li>
                <a href="https://stackoverflow.com/legal/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/contact">
                  Contact Us
                </a>
              </li>
              <li>Cookie Settings</li>
              <li>
                <a href="https://stackoverflow.com/legal/cookie-policy">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>
              <a href="https://stackexchange.com/">STACK EXCHANGE NETWORK</a>
            </h5>
            <ul>
              <li>
                <a href="https://stackexchange.com/sites#technology">
                  Technology
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#culturerecreation">
                  Culture & recreation
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#lifearts">
                  Life & arts
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#science">Science</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#professional">
                  Professional
                </a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#business">Business</a>
              </li>
              <li>
                <a href="https://api.stackexchange.com/">API</a>
              </li>
              <li>
                <a href="https://data.stackexchange.com/">Data</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="footer-copyright">
          <ul>
            <li>
              <a href="https://stackoverflow.blog/?blb=1/">Blog</a>
            </li>
            <li>
              <a href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/stack-overflow">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/thestackoverflow">Instagram</a>
            </li>
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
