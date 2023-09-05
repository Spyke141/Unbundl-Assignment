import "./App.css";
import Cart from "./Components/Cart";
import data from "./chocolate_data.json";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./Components/ProductCard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  //eslint-disable-next-line
  const [chocoData, setChocoData] = useState(data);
  const [cart, setCart] = useState([]);

  const isCartFull = cart.length >= 8;

  useEffect(() => {
    console.log(chocoData);
  });

  const addToCart = (item) => {
    if (!isCartFull) {
      setCart([...cart, item]);
    } else {
      toast.error("Maximum Chocolate Kit Size Reached", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="container text-center">
      <h1 className="mt-4">Customize Your Chocolatey Kit</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-9">
            <ProductCard chocoData={chocoData} addToCart={addToCart} />
          </div>
          <div
            className="col-3"
            style={{ position: "sticky", top: "0", height: "100vh" }}
          >
            <h3 className="mt-4">Custom Choco Kit</h3>
            <Cart
              cart={cart}
              addToCart={addToCart}
              isCartFull={isCartFull}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
