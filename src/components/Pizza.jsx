import React from 'react';

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
      <button className="remove-pizza-button" onClick={ removePizzaFromOrder }>Remove Pizza</button>
    </li>
  );
}

export default Pizza;