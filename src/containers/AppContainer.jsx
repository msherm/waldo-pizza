import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';
import * as types from '../actions/action-types.js';
import { togglePizzaBuilder, selectPizzaSize, toggleToppingSelection, addPizzaToOrder, removePizzaFromOrder } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App pizzaData={ this.props.pizzaData }
           builder={ this.props.builder }
           builderVisible={ this.props.builderVisible }
           orders={ this.props.orders }
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
    builderVisible: store.ordersState.builderVisible,
    orders: store.ordersState.orders
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleTogglePizzaBuilder: () => {
      dispatch(togglePizzaBuilder());
    },
    handleSelectPizzaSize: (sizeIndex) => {
      dispatch(selectPizzaSize(sizeIndex));
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
