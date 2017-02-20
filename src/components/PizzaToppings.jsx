import React from 'react';
import PizzaToppingSelector from './PizzaToppingSelector.jsx';

const PizzaToppings = (props) => {
  const toppingSelectors = props.toppings.map((topping, i) => {
    const isChecked = (props.selectedToppings && props.selectedToppings.indexOf(i) > -1) ? 'checked' : '';
    return <PizzaToppingSelector key={ i } toppingIndex={ i } name={ topping.name } price={ topping.price } isChecked={ isChecked } toggleToppingSelection={ props.toggleToppingSelection }/>
  });

  return (
    <div>
      <h4>Select Toppings</h4>
      <ul className="builder-toppings-selection">
        { toppingSelectors }
      </ul>
    </div>
  );
}

export default PizzaToppings;