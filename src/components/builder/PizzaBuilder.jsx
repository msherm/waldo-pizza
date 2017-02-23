import React, { PropTypes } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector.jsx';
import PizzaToppings from './PizzaToppings.jsx';
import { calculatePizzaCost } from '../../common/functions.js';

const PizzaBuilder = (props) => {
	const selectPizzaSize = (sizeIndex) => {
		props.selectPizzaSize(sizeIndex);
	}

	const toggleToppingSelection = (toppingIndex) => {
		props.toggleToppingSelection(toppingIndex);
	}

	const addPizzaToOrder = (event) => {
		event.preventDefault();
		props.addPizzaToOrder(props.builder.sizeIndex, props.builder.toppings);
	}

	const sizes = props.pizzaData.sizes.map((size, i) => {
		const selected = props.builder.sizeIndex === i ? 'selected' : '';
		return <PizzaSizeSelector key={ i } choice={ i } currentSizeIndex={ props.builder.sizeIndex } selected={ selected } toppings={ size.toppings } size={ size } selectPizzaSize={ selectPizzaSize }/>;
	});

	let addToppingsDisabled = false;

	if (props.builder.sizeIndex >= 0) {
		addToppingsDisabled = props.builder.toppings.length >= props.pizzaData.sizes[props.builder.sizeIndex].maxToppings && props.pizzaData.sizes[props.builder.sizeIndex].maxToppings !== null ? true : false;
	}

	const pizzaToppingsPanel = props.builder.sizeIndex > -1 ? <PizzaToppings addToppingsDisabled={ addToppingsDisabled } toppings={ props.pizzaData.sizes[props.builder.sizeIndex].toppings } selectedToppings={ props.builder.toppings } toggleToppingSelection={ toggleToppingSelection }/> : null;
	const addToOrderButton = props.builder.sizeIndex >= 0 ? <button className="add-to-order-button" type="submit">Add to Order</button> : null;

  return (
    <div id="pizza-builder">
    	<form onSubmit={ addPizzaToOrder }>
	      <h3>Pizza Builder</h3>
	    	<h4>Select Size</h4>
	    	<ul className="builder-size-selection">
	    		{ sizes }
	    	</ul>
	      { pizzaToppingsPanel }
	      <div className="pizza-price">Price: ${ (calculatePizzaCost(props.pizzaData, props.builder.sizeIndex, props.builder.toppings)).toFixed(2) }</div>
	      { addToOrderButton }
      </form>
    </div>
	);
}

export default PizzaBuilder;

PizzaBuilder.propTypes = {
  pizzaData: React.PropTypes.object,
  builder: React.PropTypes.object,
  selectPizzaSize: React.PropTypes.func,
  toggleToppingSelection: React.PropTypes.func
};