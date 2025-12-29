import { useReducer, useContext } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import { CartContext } from "../../context/CartContext";

const initialState = {
  showModal: false,
  showToast: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    case "SHOW_TOAST":
      return { ...state, showToast: true };
    case "HIDE_TOAST":
      return { ...state, showToast: false };
    default:
      return state;
  }
};

const ProductCard = ({ product }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    dispatch({ type: "SHOW_TOAST" });
    setTimeout(() => dispatch({ type: "HIDE_TOAST" }), 1000);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top custom-image-set"
          alt={product.title}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "OPEN_MODAL" })}
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
        show={state.showModal}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        product={product}
      />
      {state.showToast &&
        createPortal(
          <div
            className="toast show position-fixed end-0 m-3 mt-4 bg-success text-white"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 1060, top: "60px" }}
          >
            <div className="d-flex">
              <div className="toast-body">Item added to cart!</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => dispatch({ type: "HIDE_TOAST" })}
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
