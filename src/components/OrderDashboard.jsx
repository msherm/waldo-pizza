import React from 'react';
import PizzaBuilder from './PizzaBuilder.jsx';
import Order from './Order.jsx';

const OrderDashboard = (props) => {

  const togglePizzaBuilder = (event) => {
    props.togglePizzaBuilder();
  }
  const cls = 'OrderDashboard' + (props.isSelected ? ' active' : '');

  const orders = props.orders.map((order, i) => {
    return (
      <Order key={ i } orderId={ i } orderDetails={ order }/>
    );
  });

  let pizzaBuilderInterface = '';

  if (props.builderVisible) {
    console.log(props.pizzaData);
    pizzaBuilderInterface = <PizzaBuilder pizzaData={ props.pizzaData }/>;
  }

  return (
    <div className="order-dashboard">
      <button onClick={ togglePizzaBuilder }>Add a Pizza</button>
      { pizzaBuilderInterface }
      <h3>Orders</h3>
      <ul className="pending-orders">
        { orders }
      </ul>
      <h3>Total</h3>
      <button>Place Order</button>
    </div>
  );
}

export default OrderDashboard;