import React from 'react';
import Pizza from './Pizza.jsx';
import { calculateTotalCost } from '../../common/functions.js';

const PizzaCart = (props) => {
	const pizzas = props.orders.map((order, i) => {
    return (
      <Pizza key={ i } pizzaId={ i } pizzaData={ props.pizzaData } orderDetails={ order } removePizzaFromOrder={ props.removePizzaFromOrder }/>
    );
  });

	if (pizzas.length) {
		return (
			<div>
				<h3>Pizza Cart</h3>
				<ul className="pizza-cart">
					{ pizzas }
				</ul>
				<div className="pizza-price">Total ${ calculateTotalCost(props.pizzaData, props.orders).toFixed(2) }</div>
				<button className="place-order-button">Place Order</button>
			</div>
		)
	} else {
		return null;
	}
}

export default PizzaCart;

PizzaCart.propTypes = {
	pizzaData: React.PropTypes.object,
	orders: React.PropTypes.array,
	removePizzaFromOrder: React.PropTypes.func,
};