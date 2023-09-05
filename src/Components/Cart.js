import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, chocolate) => total + chocolate.price, 0);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleBuyNow = () => {
    if (cart.length > 0) {
      toast.success(
        "Thank you for the purchase. Your items will be delivered shortly."
      );
      clearCart();
    }
  };

  return (
    <div>
      <h6 className="mt-4">
        Please add Maximum of '8' Chocolates for your Custom Kit
      </h6>
      <hr class="solid"></hr>
      {cart.length === 0 ? (
        <p className="mt-5">Your cart is empty.</p>
      ) : (
        <ol className="mt-5 text-start">
          {cart.map((item) => (
            <li className="mt-2" key={item.id}>
              {item.name} - {item.price} INR
              <button
                type="button"
                className="btn btn-warning btn-sm ml-2 mx-2 d-flex"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      )}
      <hr class="solid"></hr>
      {cart.length > 0 && (
        <div className="mt-4 text-start">
          <p>
            <strong>Total Custom Kit Price: {calculateTotal()} INR</strong>
          </p>
          <button
            type="button"
            className="btn btn-primary col-md-12"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
