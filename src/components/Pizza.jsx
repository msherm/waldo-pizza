import React from 'react';
import { calculatePizzaCost } from '../common/functions.js';

const Pizza = (props) => {
  const toppings = props.orderDetails.toppings.map((toppingIndex, i) => {
    return (
      <li key={ i }>
        { props.pizzaData.sizes[props.orderDetails.sizeIndex].toppings[toppingIndex].topping.name }
      </li>
    );
  });

  const removePizzaFromOrder = () => {
    props.removePizzaFromOrder(props.pizzaId);
  }

  return (
    <li>
      <h4>{ props.pizzaData.sizes[props.orderDetails.sizeIndex].name } Pizza</h4>
      <div className="order-toppings-title">Toppings</div>
      <ul className="order-toppings">
        { toppings }
      </ul>
      <div className="pizza-price">Price: ${ (calculatePizzaCost(props.pizzaData, props.orderDetails.sizeIndex, props.orderDetails.toppings)).toFixed(2) }</div>
      <button className="remove-pizza-button" onClick={ removePizzaFromOrder }>Remove Pizza</button>
    </li>
  );
}

export default Pizza;

Pizza.propTypes = {
  pizzaId: React.PropTypes.number,
  pizzaData: React.PropTypes.object,
  orderDetails: React.PropTypes.object,
  removePizzaFromOrder: React.PropTypes.func
};