import React from 'react';

const PizzaSizeSelector = (props) => {
  const toppings = props.toppings.map((item, i) => {
    return item.defaultSelected ? <li key={ i }>{ item.topping.name }</li> : null;
  });

  const selectPizzaSize = () => {
    const defaultToppings = props.toppings.map((item, i) => {
      return item.defaultSelected ? i : null;
    })
    .filter((defaultToppingIndex) => {
      return defaultToppingIndex !== null && defaultToppingIndex >= 0;
    });
    props.selectPizzaSize([props.choice, defaultToppings]);
  }

  //if the current selection is the same as this choice, indicated that it's currently selected, otherwise render the select button
  const pizzaSelectorButton = props.currentSizeIndex === props.choice ? <div className='selected-size'>Selected</div> : <button onClick={ selectPizzaSize }>Select</button>;
  const maxToppings = props.size.maxToppings ? props.size.maxToppings : 'Unlimited!';

  return (
    <li className={ props.selected }>
      <h5>{ props.size.name }</h5>
      <strong>${ props.size.price }</strong>
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

PizzaSizeSelector.propTypes = {
  toppings: React.PropTypes.array,
  choice: React.PropTypes.number,
  size: React.PropTypes.object
};