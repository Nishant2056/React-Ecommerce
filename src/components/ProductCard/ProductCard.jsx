import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top custom-image-set"
          alt={product.title}
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
        <div className="card-body d-flex flex-column align-items-center gap-2">
          <h5 className="card-title text-center">{product.title}</h5>
          <p className="card-text text-center">{product.description}</p>
          <p className="card-text text-center">${product.price}</p>
        </div>
        <button
          type="button"
          className="btn btn-primary col-6 m-auto"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        product={product}
      />
      {showToast &&
        createPortal(
          <div
            className="toast show position-fixed top-0 end-0 m-3 mt-4 bg-danger text-white"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 1060 }}
          >
            <div className="d-flex">
              <div className="toast-body">Item added to cart!</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ProductCard;
