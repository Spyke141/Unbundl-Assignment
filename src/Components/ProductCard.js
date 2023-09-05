import React from "react";
import Card from "./Card";

const ProductCard = ({ chocoData, addToCart }) => {
  return (
    <div className="row">
      <div className="col d-flex flex-wrap">
        {chocoData.map((chocolate, key) => (
          <Card
            key={chocolate.id}
            chocolate={chocolate}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
