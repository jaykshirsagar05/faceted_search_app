import React, { useState } from 'react';
import FacetFilter from './components/FacetFilter';
import ProductList from './components/ProductList';
import products from './data/Products';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    brands: [],
  });

  const handleFilterChange = (filter, value, type) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (value) {
        newFilters[type].push(filter);
      } else {
        newFilters[type] = newFilters[type].filter(f => f !== filter);
      }
      return newFilters;
    });
  };

  const applyFilters = (products) => {
    return products.filter(product => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
      const priceMatch = filters.prices.length === 0 || (filters.prices.includes('below-100') && product.price < 100) || (filters.prices.includes('100-300') && product.price >= 100 && product.price <= 300);
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
      return categoryMatch && priceMatch && brandMatch;
    });
  };

  return (
    <div className="app">
      <FacetFilter filters={filters} onFilterChange={handleFilterChange} />
      <ProductList products={applyFilters(products)} />
    </div>
  );
};

export default App;
