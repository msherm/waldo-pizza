import React, { PropTypes } from 'react';
import OrderDashboard from './OrderDashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<h1>Waldo Pizza</h1>
        <OrderDashboard pizzaData={ this.props.pizzaData }
				  builderVisible={ this.props.builderVisible }
				  builder={ this.props.builder }
				  orders={ this.props.orders }
				  togglePizzaBuilder={ this.props.togglePizzaBuilder }
				  selectPizzaSize={ this.props.selectPizzaSize }
				  toggleToppingSelection={ this.props.toggleToppingSelection }
				  addPizzaToOrder={ this.props.addPizzaToOrder }
				  removePizzaFromOrder={ this.props.removePizzaFromOrder }/>
      </div>
    );
  }
}

export default App;