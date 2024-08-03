'use client';

import React from 'react';

function Product({ prodName }) {
  return (
    <div className="border shadow-md rounded-md py-2 px-4">
      <h1 className="text-xl">{prodName}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, sunt!
      </p>
      <button
        onClick={() => {
          alert(`${prodName} added to cart.`);
        }}
        className="p-2 bg-blue-400 hover:bg-blue-500"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
