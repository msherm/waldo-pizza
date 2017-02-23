import React from 'react';
import PizzaBuilder from './builder/PizzaBuilder.jsx';
import PizzaCart from './cart/PizzaCart.jsx';

const OrderDashboard = (props) => {
  const togglePizzaBuilder = (event) => {
    props.togglePizzaBuilder();
  }

  return (
    <div className="order-dashboard">
      { !props.builder.visible ? <button className="add-pizza-button" onClick={ togglePizzaBuilder }>Add a Pizza</button> : <button className="cancel-button" onClick={ togglePizzaBuilder }>Cancel</button> }
      { !props.builder.visible ? '' : <PizzaBuilder pizzaData={ props.pizzaData } builder={ props.builder } updatePizzaData={ props.updatePizzaData } togglePizzaBuilder={ props.togglePizzaBuilder } selectPizzaSize={ props.selectPizzaSize } toggleToppingSelection={ props.toggleToppingSelection } addPizzaToOrder={ props.addPizzaToOrder }/> }
      <PizzaCart pizzaData={ props.pizzaData } orders={ props.orders } removePizzaFromOrder={ props.removePizzaFromOrder } />
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