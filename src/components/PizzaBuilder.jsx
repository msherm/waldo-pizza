import React, { PropTypes } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector.jsx';

class PizzaBuilder extends React.Component {
	constructor() {
		super();

		this.state = {
			order: {
				size: null,
				toppings: []
			}
		}

		this.selectPizzaSize = this.selectPizzaSize.bind(this);
	}

	selectPizzaSize(sizeIndex) {
		this.setState({ size: sizeIndex });
	}

  render() {
  	const sizes = this.props.pizzaData.sizes.map((size, i) => {
  		let selected = '';
  		if (this.state.size === i) {
  			selected = 'selected';
  		}
  		return <PizzaSizeSelector key={ i } choice={ i } size={ size } selected={ selected } selectPizzaSize={ this.selectPizzaSize }/>;
  	});

    return (
	    <div id="pizza-builder">
	      <h3>Pizza Builder</h3>
	    	<h4>Select a base size</h4>
	    	<ul className="pizza-size-selection">
	    		{ sizes }
	    	</ul>
	      <h4>Select your toppings</h4>
	      <button>Add to order</button>
	    </div>
  	);
	}
}

export default PizzaBuilder;