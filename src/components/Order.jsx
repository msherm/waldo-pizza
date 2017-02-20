import React from 'react';

const Order = (props) => {
  const toppings = props.orderDetails.toppings.map((topping, i) => {
    return (
      <li key={ i } className="topping">
        { topping }
      </li>
    );
  });

  return (
    <li>
      Order: { props.orderId }, Size: { props.orderDetails.size }
      <h4>Toppings</h4>
      <ul className="toppings">
        { toppings }
      </ul>
    </li>
  );
}

export default Order;