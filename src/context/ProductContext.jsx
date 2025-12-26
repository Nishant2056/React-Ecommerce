import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
  product: [],
  loading: true,
  error: null,
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError(
          "Something went wrong! Please check your status and try again later"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
