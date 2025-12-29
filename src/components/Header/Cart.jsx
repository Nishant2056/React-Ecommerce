import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="lead mb-0">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <>
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
      <div className="mt-3 text-end fw-bold">
        Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </div>
    </>
  );
};

export default Cart;
