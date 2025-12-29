import { useState } from "react";
import Modal from "../Modal/Modal";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

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
        <a href="#" className="btn btn-primary col-6 m-auto">
          Add to Cart
        </a>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
