import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import CartModal from "./CartModal.jsx";
import logo from "../../assets/store logo.jpg";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="container header">
      <header className="d-flex flex-wrap justify-content-center p-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <img src={logo} className="store-logo" alt="Store Logo" width="60" />
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              FAQs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div
          className="cart-icon"
          style={{ cursor: "pointer" }}
          onClick={() => setShowCart(true)}
        >
          <FaCartPlus size={30} />
        </div>
      </header>
      <CartModal show={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
};

export default Header;
