
import React, { useState } from 'react';
import ProductList from './component/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const productsData = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Shirt', category: 'Clothing', price: 50 },
  { name: 'Notebook', category: 'Stationery', price: 10 },
  { name: 'Pen', category: 'Stationery', price: 5 },
  { name: 'Book', category: 'Books', price: 15 },
  { name: 'Headphones', category: 'Electronics', price: 200 },
  { name: 'Trousers', category: 'Clothing', price: 70 },
];

const categories = ['All', 'Electronics', 'Clothing', 'Stationery', 'Books'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // فلترة المنتجات بناءً على الفئة المختارة
  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="background">
    <div className="container mt-5">
        
      <h1 className=" text-center mb-4  text-gradient text-shadow">Product List</h1>

      {/* جزء الفلاتر */}
      <div className="d-flex justify-content-center mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn btn-primary mx-2 ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض المنتجات */}
      <ProductList products={filteredProducts} />
    </div>
    </div>
  );
}

export default App;
