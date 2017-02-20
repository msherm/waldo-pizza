import React from 'react';

const PizzaSizeSelector = (props) => {
  let toppingsCost = 0;
  const toppings = props.defaultToppings.map((toppingIndex, i) => {
    const toppingPrice = props.toppings[toppingIndex].price ? <strong>${ props.toppings[toppingIndex].price }</strong> : null;

    toppingsCost += props.toppings[toppingIndex].price;

    return (
      <li key={ i }>
        <div>{ props.toppings[toppingIndex].name }</div>
        { toppingPrice }
      </li>
    );
  });

  const selectPizzaSize = () => {
    props.selectPizzaSize(props.choice);
  }

  const pizzaSelectorButton = props.currentSizeIndex === props.choice ? 'Selected' : <button onClick={ selectPizzaSize }>Select</button>;

  return (
    <li className={ props.selected }>
      <h5>{ props.size.name }</h5>
      <strong>${ (props.size.price + toppingsCost) }</strong>
      <div>Standard Toppings</div>
      <ul className="toppings">
        { toppings }
      </ul>
      <em>Max Toppings: { props.size.maxToppings }</em>
      { pizzaSelectorButton }
    </li>
  );
}

export default PizzaSizeSelector;