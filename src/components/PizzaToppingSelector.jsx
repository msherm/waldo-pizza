import React from 'react';

const PizzaToppingSelector = (props) => {
  const toggleToppingSelection = (event) => {
    props.toggleToppingSelection(parseInt(event.target.value, 10));
  }

  return (
    <li className={ props.selected }>
      <input type="checkbox" value={ props.toppingIndex } checked={ props.isChecked } onChange={ toggleToppingSelection }/>
      <label>{ props.name } <span>(${ props.price })</span></label>
    </li>
  );
}

export default PizzaToppingSelector;