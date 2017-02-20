import React, { PropTypes } from 'react';
import OrderDashboard from './OrderDashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <OrderDashboard pizzaData={ this.props.pizzaData } builderVisible={ this.props.builderVisible } orders={ this.props.orders } togglePizzaBuilder={ this.props.togglePizzaBuilder }/>
      </div>
    );
  }
}

export default App;