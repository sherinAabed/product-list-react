import React from 'react';
import './ProductList.css'; // استيراد ملف CSS المخصص

function ProductList({ products }) {
  return (
    <div className="row">
      {products.map((product, index) => (
        <div key={index} className="col-md-4 mb-4">
          {/* إضافة class مخصص لكل منتج */}
          <div className="card h-100 product-card">
            <div className="card-body text-center">
              <h5 className="card-title product-name">{product.name}</h5>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text price">Price: <span>${product.price}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
