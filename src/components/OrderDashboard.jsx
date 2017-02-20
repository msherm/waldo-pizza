import React from 'react';
import PizzaBuilder from './PizzaBuilder.jsx';
import Pizza from './Pizza.jsx';
import { calculateTotalCost } from '../common/functions.js';

const OrderDashboard = (props) => {
  const togglePizzaBuilder = (event) => {
    props.togglePizzaBuilder();
  }

  const pizzas = props.orders.map((order, i) => {
    return (
      <Pizza key={ i } pizzaId={ i } pizzaData={ props.pizzaData } orderDetails={ order } removePizzaFromOrder={ props.removePizzaFromOrder }/>
    );
  });
  let pizzaBuilderInterface = '';
  let pizzaBuilderVisibilityButton = <button className="add-pizza-button" onClick={ togglePizzaBuilder }>Add a Pizza</button>;

  if (props.builder.visible) {
    pizzaBuilderInterface = <PizzaBuilder pizzaData={ props.pizzaData } builder={ props.builder } updatePizzaData={ props.updatePizzaData } togglePizzaBuilder={ props.togglePizzaBuilder } selectPizzaSize={ props.selectPizzaSize } toggleToppingSelection={ props.toggleToppingSelection } addPizzaToOrder={ props.addPizzaToOrder }/>;
    pizzaBuilderVisibilityButton = <button className="cancel-button" onClick={ togglePizzaBuilder }>Cancel</button>;
  }

  const orderPizzas = pizzas.length ? <div><h3>Order Pizzas</h3><ul className="order-pizzas">{ pizzas }</ul><div className="pizza-price">Total ${ calculateTotalCost(props.pizzaData, props.orders).toFixed(2) }</div><button className="place-order-button">Place Order</button></div> : null;

  return (
    <div className="order-dashboard">
      { pizzaBuilderVisibilityButton }
      { pizzaBuilderInterface }
      { orderPizzas }
    </div>
  );
}

export default OrderDashboard;

OrderDashboard.propTypes = {
  pizzaData: React.PropTypes.object,
  builder: React.PropTypes.object,
  updatePizzaData: React.PropTypes.func,
  togglePizzaBuilder: React.PropTypes.func,
  addPizzaToOrder: React.PropTypes.func,
  removePizzaFromOrder: React.PropTypes.func,
  selectPizzaSize: React.PropTypes.func,
  toggleToppingSelection: React.PropTypes.func
};