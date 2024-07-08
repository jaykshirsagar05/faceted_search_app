import React from 'react';

const FacetFilter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e, type) => {
    const { name, checked } = e.target;
    onFilterChange(name, checked, type);
  };

  return (
    <div className="facet-filter">
      <h3>Filter by Category</h3>
      <div>
        <input
          type="checkbox"
          name="Electronics"
          checked={filters.categories.includes('Electronics')}
          onChange={(e) => handleCheckboxChange(e, 'categories')}
        />
        <label>Electronics</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Furniture"
          checked={filters.categories.includes('Furniture')}
          onChange={(e) => handleCheckboxChange(e, 'categories')}
        />
        <label>Furniture</label>
      </div>

      <h3>Filter by Price</h3>
      <div>
        <input
          type="checkbox"
          name="below-100"
          checked={filters.prices.includes('below-100')}
          onChange={(e) => handleCheckboxChange(e, 'prices')}
        />
        <label>Below $100</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="100-300"
          checked={filters.prices.includes('100-300')}
          onChange={(e) => handleCheckboxChange(e, 'prices')}
        />
        <label>$100 - $300</label>
      </div>

      <h3>Filter by Brand</h3>
      <div>
        <input
          type="checkbox"
          name="Brand X"
          checked={filters.brands.includes('Brand X')}
          onChange={(e) => handleCheckboxChange(e, 'brands')}
        />
        <label>Brand X</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Brand Y"
          checked={filters.brands.includes('Brand Y')}
          onChange={(e) => handleCheckboxChange(e, 'brands')}
        />
        <label>Brand Y</label>
      </div>
    </div>
  );
};

export default FacetFilter;
