import React from 'react';
import { calculatePizzaCost } from '../common/functions.js';

const Pizza = (props) => {
  const toppings = props.orderDetails.toppings.map((toppingIndex, i) => {
    return (
      <li key={ i }>
        { props.pizzaData.toppings[toppingIndex].name }
      </li>
    );
  });

  const removePizzaFromOrder = () => {
    props.removePizzaFromOrder(props.pizzaId);
  }

  return (
    <li>
      <h4>{ props.pizzaData.sizes[props.orderDetails.size].name } Pizza</h4>
      <div className="order-toppings-title">Toppings</div>
      <ul className="order-toppings">
        { toppings }
      </ul>
      <div className="pizza-price">Price: ${ (calculatePizzaCost(props.pizzaData, props.orderDetails.size, props.orderDetails.toppings)).toFixed(2) }</div>
      <button className="remove-pizza-button" onClick={ removePizzaFromOrder }>Remove Pizza</button>
    </li>
  );
}

export default Pizza;