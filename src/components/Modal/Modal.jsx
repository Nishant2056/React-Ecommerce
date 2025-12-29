import { createPortal } from "react-dom";

const Modal = ({ show, onClose, product }) => {
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
            <h5 className="modal-title">{product.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center mb-3">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxHeight: "200px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <p>{product.description}</p>
            <h5 className="mt-2">Price: ${product.price}</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
