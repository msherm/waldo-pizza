import React, { PropTypes } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector.jsx';
import PizzaToppings from './PizzaToppings.jsx';

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
  		return <PizzaSizeSelector key={ i } choice={ i } currentSizeIndex={ this.state.sizeIndex} toppings={ this.props.pizzaData.toppings } defaultToppings={ size.defaultToppings } size={ size } selectPizzaSize={ this.selectPizzaSize }/>;
  	});

  	const selectedBase = this.state.sizeIndex && this.state.sizeIndex >= 0 ? <strong>{ this.props.pizzaData.sizes[this.state.sizeIndex].name }</strong> : null;
  	const pizzaToppingsPanel = this.state.sizeIndex > -1 ? <PizzaToppings toppings={ this.props.pizzaData.toppings } selectedToppings={ this.state.toppings } toggleToppingSelection={ this.toggleToppingSelection }/> : null;


  	let basePrice = 0;
  	let toppingsTotalPrice = 0;
  	let addToOrderButton = null;

  	if (this.state.sizeIndex >= 0) {
  		basePrice = this.props.pizzaData.sizes[this.state.sizeIndex].price;

  		if (this.state.toppings) {
	  		toppingsTotalPrice = this.state.toppings.reduce(function(acc, toppingIndex) {
		  		return acc + this.props.pizzaData.toppings[toppingIndex].price;
				}.bind(this), 0);
	  	};

	  	addToOrderButton = <input type="submit" value="Add to order"/>;
  	}

    return (
	    <div id="pizza-builder">
	    	<form onSubmit={ this.addPizzaToOrder }>
		      <h3>Pizza Builder</h3>
		    	<h4>Select a base size</h4>
		    	<ul className="builder-size-selection">
		    		{ sizes }
		    	</ul>
		    	{ selectedBase }
		      <h4>Select your toppings</h4>
		      { pizzaToppingsPanel }
		      <h4>Price: ${ (basePrice + toppingsTotalPrice).toFixed(2) }</h4>
		      { addToOrderButton }
	      </form>
	    </div>
  	);
	}
}

export default PizzaBuilder;