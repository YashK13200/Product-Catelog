import React, { useState, useMemo } from 'react';
import { mockProducts } from './mockProducts';
import Filters from './components/Filters';
import ProductList from './components/ProductList';

function getUniqueValues(arr, key) {
  return [...new Set(arr.map(item => item[key]))];
}

const initialFilters = {
  category: '',
  brands: [],
  priceMin: '',
  priceMax: ''
};

export default function App() {
  const [filters, setFilters] = useState(initialFilters);

  const categories = useMemo(
    () => getUniqueValues(mockProducts, 'category'),
    []
  );
  const brands = useMemo(
    () => getUniqueValues(mockProducts, 'brand'),
    []
  );

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(prod => {
      // Category filter
      if (filters.category && prod.category !== filters.category) return false;
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(prod.brand)) return false;
      // Price min
      if (filters.priceMin && prod.price < Number(filters.priceMin)) return false;
      // Price max
      if (filters.priceMax && prod.price > Number(filters.priceMax)) return false;
      return true;
    });
  }, [filters]);

  const handleReset = () => setFilters(initialFilters);

  return (
    <div className="app-container">
      <h1>Product Catalog Filtering UI</h1>
      <Filters
        categories={categories}
        brands={brands}
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleReset}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}