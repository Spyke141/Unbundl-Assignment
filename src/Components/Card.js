import React from "react";

const Card = ({ chocolate, addToCart }) => {
  const cardStyle = {
    maxWidth: "15rem",
    height: "250px",
    padding: "2px",
  };

  const handleAddToCart = () => {
    addToCart(chocolate);
  };

  return (
    <div className="card mt-4 mx-2" style={cardStyle}>
      <img
        src={process.env.PUBLIC_URL + chocolate.imgSrc}
        className="card-img-top"
        alt={chocolate.imgSrc}
        style={{ width: "100%", height: "100%", objectFit: "fit" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {chocolate.name}
          <span>- {chocolate.price} INR</span>
        </h5>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddToCart}
        >
          Add to Kit
        </button>
      </div>
    </div>
  );
};

export default Card;
