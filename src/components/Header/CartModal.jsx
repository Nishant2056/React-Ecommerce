import { createPortal } from "react-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartModal = ({ show, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (!show) return null;

  return createPortal(
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <div className="text-center py-4">
                <p className="lead mb-0">Your cart is currently empty.</p>
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {cart.map((item, index) => (
                  <li
                    key={`${item.id}-${index}`}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "contain",
                        }}
                      />
                      <div>
                        <h6
                          className="mb-0 text-truncate"
                          style={{ maxWidth: "200px" }}
                        >
                          {item.title}
                        </h6>
                        <small className="text-muted">${item.price}</small>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            {cart.length > 0 && (
              <div className="me-auto fw-bold">
                Total: $
                {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </div>
            )}
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
