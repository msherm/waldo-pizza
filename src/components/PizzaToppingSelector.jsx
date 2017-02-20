import React from 'react';

const PizzaToppingSelector = (props) => {
  const toggleToppingSelection = (event) => {
    props.toggleToppingSelection(parseInt(event.target.value, 10));
  }

  const isDisabled = props.addToppingsDisabled && !props.isChecked ? 'disabled' : '';

  return (
    <li className={ isDisabled }>
      <input type="checkbox" value={ props.toppingIndex } checked={ props.isChecked } onChange={ toggleToppingSelection } disabled={ isDisabled }/>
      <label>{ props.name } <span>(${ props.price })</span></label>
    </li>
  );
}

export default PizzaToppingSelector;