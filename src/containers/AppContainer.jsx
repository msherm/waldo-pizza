import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { updatePizzaData, togglePizzaBuilder, selectPizzaSize, toggleToppingSelection, addPizzaToOrder, removePizzaFromOrder } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App pizzaData={ this.props.pizzaData }
           builder={ this.props.builder }
           orders={ this.props.orders }
           updatePizzaData={ this.props.handleUpdatePizzaData }
           togglePizzaBuilder={ this.props.handleTogglePizzaBuilder }
           selectPizzaSize={ this.props.handleSelectPizzaSize }
           toggleToppingSelection={ this.props.handleToggleToppingSelection }
           addPizzaToOrder={ this.props.handleAddPizzaToOrder }
           removePizzaFromOrder={ this.props.handleRemovePizzaFromOrder }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    pizzaData: store.pizzaState,
    builder: store.builderState,
    orders: store.ordersState.orders
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleUpdatePizzaData: (pizzaSizes) => {
      dispatch(updatePizzaData(pizzaSizes));
    },
    handleTogglePizzaBuilder: () => {
      dispatch(togglePizzaBuilder());
    },
    handleSelectPizzaSize: (selectionSizeArr) => {
      dispatch(selectPizzaSize(selectionSizeArr[0], selectionSizeArr[1]));
    },
    handleToggleToppingSelection: (toppingIndex) => {
      dispatch(toggleToppingSelection(toppingIndex));
    },
    handleAddPizzaToOrder: (sizeIndex, toppings) => {
      dispatch(addPizzaToOrder(sizeIndex, toppings));
    },
    handleRemovePizzaFromOrder: (pizzaId) => {
      dispatch(removePizzaFromOrder(pizzaId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);