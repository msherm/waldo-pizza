import React from 'react';

const PizzaSizeSelector = (props) => {
  const selectPizzaSize = () => {
    props.selectPizzaSize(props.choice);
  }

  return (
    <li className={ props.selected }>
      <h5>{ props.size.name }</h5>
      <strong>${ props.size.price }</strong>
      <em>Max Toppings: { props.size.maxToppings }</em>
      <button onClick={ selectPizzaSize }>Select</button>
    </li>
  );
}

export default PizzaSizeSelector;