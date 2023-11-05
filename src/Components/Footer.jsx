import React from 'react';

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <a href="https://github.com/eakelvin" title="Link to Github Profile">
              <img src="./images/github.svg" className="footer__social-image" alt="Github" />
            </a>
          </li>
          <li className="footer__social-link-item">
            <a href="https://ea-linktree.netlify.app/" title="LinkTree Profile">
              <img src="./images/codepen.svg" className="footer__social-image" alt="Codepen" />
            </a>
          </li>
          <li className="footer__social-link-item">
            <a href="https://www.linkedin.com/in/kelvin-akaba/" title="Link to Linkedin Profile">
              <img src="./images/linkedin.svg" className="footer__social-image" alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
