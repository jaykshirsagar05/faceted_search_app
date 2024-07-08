import React from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <h4>{product.name}</h4>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Brand: {product.brand}</p>
  </div>
);

export default ProductItem;
