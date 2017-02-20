import React, { PropTypes } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector.jsx';
import PizzaToppings from './PizzaToppings.jsx';
import { calculatePizzaCost } from '../common/functions.js';

class PizzaBuilder extends React.Component {
	constructor() {
		super();

		this.state = {
			sizeIndex: undefined,
			toppings: []
		}

		this.selectPizzaSize = this.selectPizzaSize.bind(this);
		this.toggleToppingSelection = this.toggleToppingSelection.bind(this);
		this.addPizzaToOrder = this.addPizzaToOrder.bind(this);
	}

	selectPizzaSize(sizeIndex) {
		const initialToppings = this.props.pizzaData.sizes[sizeIndex].defaultToppings.slice();
		this.setState({ sizeIndex: sizeIndex, toppings: initialToppings });
	}

	addPizzaToOrder(event) {
		event.preventDefault();
		this.props.addPizzaToOrder(this.state.sizeIndex, this.state.toppings);
		this.props.togglePizzaBuilder();
	}

	toggleToppingSelection(toppingIndex) {
		const toppingSelectedIndex = this.state.toppings.indexOf(toppingIndex);
		//if the toppingIndex is in the pizza builder's toppings remove it, otherwise push it to the array
		const toppings = toppingSelectedIndex > -1 ? [...this.state.toppings.slice(0, toppingSelectedIndex), ...this.state.toppings.slice(toppingSelectedIndex + 1)] : [...this.state.toppings.slice(), toppingIndex];
		this.setState({ toppings: toppings });
	}

  render() {
  	const sizes = this.props.pizzaData.sizes.map((size, i) => {
  		const selected = this.state.sizeIndex === i ? 'selected' : '';
  		return <PizzaSizeSelector key={ i } choice={ i } currentSizeIndex={ this.state.sizeIndex } selected={ selected } toppings={ this.props.pizzaData.toppings } defaultToppings={ size.defaultToppings } size={ size } selectPizzaSize={ this.selectPizzaSize }/>;
  	});

  	const pizzaToppingsPanel = this.state.sizeIndex > -1 ? <PizzaToppings size={ this.props.pizzaData.sizes[this.state.sizeIndex].name } toppings={ this.props.pizzaData.toppings } selectedToppings={ this.state.toppings } toggleToppingSelection={ this.toggleToppingSelection }/> : null;
  	const addToOrderButton = this.state.sizeIndex >= 0 ? <button className="add-to-order-button" type="submit">Add to order</button> : null;

    return (
	    <div id="pizza-builder">
	    	<form onSubmit={ this.addPizzaToOrder }>
		      <h3>Pizza Builder</h3>
		    	<h4>Select Size</h4>
		    	<ul className="builder-size-selection">
		    		{ sizes }
		    	</ul>
		      { pizzaToppingsPanel }
		      <div className="pizza-price">Price: ${ (calculatePizzaCost(this.props.pizzaData, this.state.sizeIndex, this.state.toppings)).toFixed(2) }</div>
		      { addToOrderButton }
	      </form>
	    </div>
  	);
	}
}

export default PizzaBuilder;