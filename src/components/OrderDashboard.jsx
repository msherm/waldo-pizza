import React from 'react';
import PizzaBuilder from './PizzaBuilder.jsx';
import Pizza from './Pizza.jsx';

const OrderDashboard = (props) => {
  const togglePizzaBuilder = (event) => {
    props.togglePizzaBuilder();
  }

  const orders = props.orders.map((order, i) => {
    return (
      <Pizza key={ i } pizzaId={ i } pizzaData={ props.pizzaData } orderDetails={ order } removePizzaFromOrder={ props.removePizzaFromOrder }/>
    );
  });

  let pizzaBuilderInterface = '';

  if (props.builderVisible) {
    pizzaBuilderInterface = <PizzaBuilder pizzaData={ props.pizzaData } togglePizzaBuilder={ props.togglePizzaBuilder } addPizzaToOrder={ props.addPizzaToOrder }/>;
  }

  return (
    <div className="order-dashboard">
      <button className="add-pizza-button" onClick={ togglePizzaBuilder }>Add a Pizza</button>
      { pizzaBuilderInterface }
      <h3>Orders</h3>
      <ul className="pending-orders">
        { orders }
      </ul>
      <h3>Total</h3>
      <button className="place-order-button">Place Order</button>
    </div>
  );
}

export default OrderDashboard;