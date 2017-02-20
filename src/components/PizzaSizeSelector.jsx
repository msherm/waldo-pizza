import React from 'react';

const PizzaSizeSelector = (props) => {
  let toppingsCost = 0;
  const toppings = props.defaultToppings.map((toppingIndex, i) => {
    return (
      <li key={ i }>
        { props.toppings[toppingIndex].name }
      </li>
    );
  });

  const selectPizzaSize = () => {
    props.selectPizzaSize(props.choice);
  }

  //if the current selection is the same as this choice, indicated that it's currently selected, otherwise render the select button
  const pizzaSelectorButton = props.currentSizeIndex === props.choice ? <div className='selected-size'>Selected</div> : <button onClick={ selectPizzaSize }>Select</button>;
  const maxToppings = props.size.maxToppings ? props.size.maxToppings : 'Unlimited!';

  return (
    <li className={ props.selected }>
      <h5>{ props.size.name }</h5>
      <strong>${ (props.size.price + toppingsCost) }</strong>
      <div>Standard Toppings:</div>
      <ul className="toppings">
        { toppings }
      </ul>
      <em>Max Toppings: { maxToppings }</em>
      { pizzaSelectorButton }
    </li>
  );
}

export default PizzaSizeSelector;