import React, { PropTypes } from 'react';
import OrderDashboard from './OrderDashboard.jsx';

class App extends React.Component {
  componentDidMount() {
    console.log("Pizza prices are volatile! Gathering update-to-date pizza prices...");
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://core-graphql.dev.waldo.photos/pizza");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = () => {
      const pizzaSizes = xhr.response.data.pizzaSizes;
      this.props.updatePizzaData(pizzaSizes);
    };
    xhr.send(JSON.stringify({query: "{pizzaSizes {name, maxToppings, basePrice, toppings {defaultSelected} } }"}));
  }

  render() {
    return (
      <div className="container">
      	<h1>Waldo Pizza</h1>
        <OrderDashboard pizzaData={ this.props.pizzaData }
        							  builder={ this.props.builder }
        							  orders={ this.props.orders }
                        updatePizzaData={ this.props.updatePizzaData }
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