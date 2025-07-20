import React from 'react';

export default function Filters({
  categories,
  brands,
  filters,
  onFilterChange,
  onReset
}) {
  return (
    <div className="filters-panel">
      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={filters.category}
          onChange={e => onFilterChange({ ...filters, category: e.target.value })}
        >
          <option value="">All</option>
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {/* Brand Filter */}
      <div className="filter-group">
        <label>Brand</label>
        <div className="brand-checkboxes">
          {brands.map(brand => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={e => {
                  if (e.target.checked) {
                    onFilterChange({
                      ...filters,
                      brands: [...filters.brands, brand]
                    });
                  } else {
                    onFilterChange({
                      ...filters,
                      brands: filters.brands.filter(b => b !== brand)
                    });
                  }
                }}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      {/* Price Range Filter */}
      <div className="filter-group">
        <label>Price Range</label>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <input
            type="number"
            min="0"
            placeholder="Min"
            value={filters.priceMin}
            onChange={e => onFilterChange({ ...filters, priceMin: e.target.value })}
            style={{ width: 60 }}
          />
          <span>–</span>
          <input
            type="number"
            min="0"
            placeholder="Max"
            value={filters.priceMax}
            onChange={e => onFilterChange({ ...filters, priceMax: e.target.value })}
            style={{ width: 60 }}
          />
        </div>
      </div>
      {/* Reset Button */}
      <div style={{ alignSelf: 'center' }}>
        <button className="reset-btn" onClick={onReset}>Reset Filters</button>
      </div>
    </div>
  );
}