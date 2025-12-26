const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top custom-image-set"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column align-items-center gap-2">
        <h5 className="card-title text-center">{product.title}</h5>
        <p className="card-text text-center">{product.description}</p>
      </div>
      <a href="#" className="btn btn-primary col-6 m-auto">
        Add to Cart
      </a>
    </div>
  );
};

export default ProductCard;
