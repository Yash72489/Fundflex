import { SlArrowDown } from "react-icons/sl";



function Navbar() {
  return (
    <nav>
  <div className="nav-container">
          <div className="header">
            <div className="logo">
              <a href="#">
                <img
                  src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66dee9112e86f5f20edf7b8a_Frame%201000000802.svg"
                  alt="logo"
                />
              </a>
            </div>

            <div className="centre-nav">
              <ul>
                <li>
                  <a href="#">
                    All Pages <SlArrowDown className="icon-drop" />
                  </a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
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
