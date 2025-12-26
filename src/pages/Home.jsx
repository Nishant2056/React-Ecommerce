import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { product, loading, error } = useContext(ProductContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <center>
        <h2>All Available Product in My store</h2>
      </center>
      <div className="container d-flex gap-4 flex-wrap justify-content-center">
        {product.map((apiData) => (
          <ProductCard key={apiData.id} product={apiData} />
        ))}
      </div>
      <center className="mt-4">
        <h2>Men's Favourite</h2>
      </center>
      <div className="container mb-5">
        <Slider {...settings}>
          {product
            .filter((data) => data.category === "men's clothing")
            .map((apiData) => (
              <div
                key={apiData.id}
                className="p-2 d-flex justify-content-center"
              >
                <ProductCard product={apiData} />
              </div>
            ))}
        </Slider>
      </div>
      <center className="mt-4">
        <h2>Available Jewellery</h2>
      </center>
      <div className="container mb-5">
        <Slider {...settings}>
          {product
            .filter((data) => data.category === "jewelery")
            .map((apiData) => (
              <div
                key={apiData.id}
                className="p-2 d-flex justify-content-center"
              >
                <ProductCard product={apiData} />
              </div>
            ))}
        </Slider>
      </div>
      <center className="mt-4">
        <h2>Women's Favourites</h2>
      </center>
      <div className="container mb-5">
        <Slider {...settings}>
          {product
            .filter((data) => data.category === "women's clothing")
            .map((apiData) => (
              <div
                key={apiData.id}
                className="p-2 d-flex justify-content-center"
              >
                <ProductCard product={apiData} />
              </div>
            ))}
        </Slider>
      </div>

      <center className="mt-4">
        <h2>Available Electronics</h2>
      </center>
      <div className="container mb-5">
        <Slider {...settings}>
          {product
            .filter((data) => data.category === "electronics")
            .map((apiData) => (
              <div
                key={apiData.id}
                className="p-2 d-flex justify-content-center"
              >
                <ProductCard product={apiData} />
              </div>
            ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
};

export default Home;
