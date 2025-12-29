import { createContext, useReducer, useEffect } from "react";

export const ProductContext = createContext({
  product: [],
  loading: true,
  error: null,
});

const initialState = {
  product: [],
  loading: true,
  error: null,
};
const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch({
            type: "FETCH_ERROR",
            payload:
              "Something went wrong! Please check your status and try again later",
          });
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
