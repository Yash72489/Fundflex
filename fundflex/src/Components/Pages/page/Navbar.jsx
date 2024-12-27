import { SlArrowDown } from "react-icons/sl";
import { logo } from "../../../assets/jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="centre-nav">
            <ul>
              <li>
                <Link to="/">
                  All Pages <SlArrowDown className="icon-drop" />
                </Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="div"></div>
    </nav>
  );
}

export default Navbar;
