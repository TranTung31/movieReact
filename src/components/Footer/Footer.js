import "./Footer.scss";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__title">Contact With Me</h1>
      <ul className="footer__icon">
        <li className="footer__icon-item">
          <a href="https://www.facebook.com/trantung3105" target="_black"><FaFacebook /></a>
        </li>
        <li className="footer__icon-item">
          <a href="https://www.instagram.com/trantung.3105/" target="_black"><FaInstagram /></a>
        </li>
        <li className="footer__icon-item">
          <a href="https://github.com/TranTung31" target="_black"><FaGithub /></a>
        </li>
      </ul>
      <h1 className="footer__copyright">Copyright © 2023 by TranTung</h1>
    </div>
  );
};

export default Footer;
