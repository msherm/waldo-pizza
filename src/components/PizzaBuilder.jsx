import React, { PropTypes } from 'react';

class PizzaBuilder extends React.Component {
	constructor() {
		super();

		this.state = {
			order: {
				size: null,
				toppings: []
			}
		}
	}

	componentDidMount() {
		//load pizza base sizes and options

	}

  render() {
    return (
	    <div id="pizza-builder">
	    	<h3>Pizza Builder</h3>
	      <h4>Select a base size</h4>
	      <h4>Select your toppings</h4>
	      <button>Add to order</button>
	    </div>
  	);
	}
}

export default PizzaBuilder;