import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import CartModal from "./CartModal.jsx";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="container header">
      <header className="d-flex flex-wrap justify-content-center p-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Nishant Store</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
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
