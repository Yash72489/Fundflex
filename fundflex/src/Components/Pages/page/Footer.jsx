import { logo } from "../../../assets/jpg";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  const footer = [
    {
      title: "Menu",
      link1: "Home",
      link2: "About Us",
      link3: "Pricing",
      link4: "Contact Us",
    },
    {
      title: "Info",
      link1: "Download",
      link2: "Demos",
      link3: "Support",
      link4: "License",
    },
  ];
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="logo-text">
          <img src={logo} alt="logo-fundflex" />
          <p>
            Effortlessly Track, Manage, and Optimize Your Personal Finances.
          </p>
        </div>

        {footer.map((footers) => (
          <>
            <div className="menu" key={footers.title}>
              <ul>
                <span>{footers.title}</span>
                <li>
                  <Link to="/">{footers.link1}</Link>
                </li>
                <li>
                  <Link to="/">{footers.link2}</Link>
                </li>
                <li>
                  <Link to="/pricing" >{footers.link3}</Link>
                </li>
                <li>
                  <Link to="/">{footers.link4}</Link>
                </li>
              
              </ul>
            </div>
          </>
        ))}
        <div className="form">
          <span>Join Our Newsletter to get regular updates</span>
          <p>
            Subscribe our newsletter to get more free design course and resource
          </p>
          <div className="input-email">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-btn">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
      <div className="footer-copywrite">
        <div className="copywrite-text">
          <p>Copyright &copy; 2024 FundFlex. All Rights Reserved</p>
        </div>
        <div className="logo-app">
          <CiFacebook />
          <CiInstagram />
          <FaXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
