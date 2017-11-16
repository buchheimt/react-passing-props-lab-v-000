import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => (
  <div className="fruit-basket">
    <Filter
      filters={props.filters} handleChange={props.updateFilterCallback}
    />
    <FilteredFruitList
      fruit={props.fruit}
      filter={props.selectedFilter} />
  </div>
)

FruitBasket.defaultProps = {
  fruit: '[]',
  filters: '[]',
  currentFilter: 'all',
  updateFilterCallback: ''
}

export default FruitBasket;
