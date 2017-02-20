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
      Pizza Id: { props.pizzaId }, Size: { props.orderDetails.size }
      <h4>Toppings</h4>
      <ul className="toppings">
        { toppings }
      </ul>
      <button className="remove-pizza-button" onClick={ removePizzaFromOrder }>Remove Pizza</button>
    </li>
  );
}

export default Pizza;