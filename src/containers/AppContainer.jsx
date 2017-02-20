import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';
import * as types from '../actions/action-types.js';
import { togglePizzaBuilder, addPizzaToOrder, removePizzaFromOrder } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App pizzaData={ this.props.pizzaData }
           builderVisible={ this.props.builderVisible }
           orders={ this.props.orders }
           togglePizzaBuilder={ this.props.handleTogglePizzaBuilder }
           addPizzaToOrder={ this.props.handleAddPizzaToOrder }
           removePizzaFromOrder={ this.props.handleRemovePizzaFromOrder }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    pizzaData: store.pizzaState,
    builderVisible: store.ordersState.builderVisible,
    orders: store.ordersState.orders
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleTogglePizzaBuilder: () => {
      dispatch(togglePizzaBuilder());
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