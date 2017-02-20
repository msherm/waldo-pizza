import React, { PropTypes } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector.jsx';
import PizzaToppings from './PizzaToppings.jsx';

class PizzaBuilder extends React.Component {
	constructor() {
		super();

		this.state = {
			order: {
				sizeIndex: null,
				toppings: []
			}
		}

		this.selectPizzaSize = this.selectPizzaSize.bind(this);
		this.toggleToppingSelection = this.toggleToppingSelection.bind(this);
	}

	selectPizzaSize(sizeIndex) {
		const initialToppings = this.props.pizzaData.sizes[sizeIndex].defaultToppings.slice();
		this.setState({ sizeIndex: sizeIndex, toppings: initialToppings });
	}

	toggleToppingSelection(toppingIndex) {
		const toppingSelectedIndex = this.state.toppings.indexOf(toppingIndex);
		//if the toppingIndex is in the pizza builder's toppings remove it, otherwise push it to the array
		const toppings = toppingSelectedIndex > -1 ? [...this.state.toppings.slice(0, toppingSelectedIndex), ...this.state.toppings.slice(toppingSelectedIndex + 1)] : [...this.state.toppings.slice(), toppingIndex];
		this.setState({ toppings: toppings });
	}

  render() {
  	const sizes = this.props.pizzaData.sizes.map((size, i) => {
  		let selected = '';
  		if (this.state.size === i) {
  			selected = 'selected';
  		}
  		return <PizzaSizeSelector key={ i } choice={ i } currentSizeIndex={ this.state.sizeIndex} toppings={ this.props.pizzaData.toppings } defaultToppings={ size.defaultToppings } size={ size } selected={ selected } selectPizzaSize={ this.selectPizzaSize }/>;
  	});

  	const selectedBase = this.state.sizeIndex >= 0 ? <strong>{ this.props.pizzaData.sizes[this.state.sizeIndex].name }</strong> : null;
  	const pizzaToppingsPanel = this.state.sizeIndex > -1 ? <PizzaToppings toppings={ this.props.pizzaData.toppings } selectedToppings={ this.state.toppings } toggleToppingSelection={ this.toggleToppingSelection }/> : null;

    return (
	    <div id="pizza-builder">
	      <h3>Pizza Builder</h3>
	    	<h4>Select a base size</h4>
	    	<ul className="pizza-size-selection">
	    		{ sizes }
	    	</ul>
	    	{ selectedBase }
	      <h4>Select your toppings</h4>
	      { pizzaToppingsPanel }
	      <button>Add to order</button>
	    </div>
  	);
	}
}

export default PizzaBuilder;