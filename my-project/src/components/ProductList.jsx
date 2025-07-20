import React from 'react';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <div style={{ textAlign: 'center', margin: "32px 0", color: "#b73c3c" }}>No products match the selected filters.</div>;
  }
  return (
    <div className="product-list">
      {products.map(prod => (
        <div className="product-card" key={prod.id}>
          <h3>{prod.name}</h3>
          <div className="product-meta">
            Category: <b>{prod.category}</b><br />
            Brand: <b>{prod.brand}</b>
          </div>
          <div className="product-price">₹{prod.price.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}