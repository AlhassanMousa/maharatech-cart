import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Menu from "./Menu";
import NotFound from "./NotFound";
import ShoppingCart from "./ShoppingCart";
import About from "./About";


class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
      { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
      { id: 3, name: "Cola", count: 0, price: 10, isInCart: false },
    ],
  };

  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  handleDelete = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
  };

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar  productsCount={this.state.products.filter((p) => p.isInCart).length}/>
       
       
        <main className="container">
        <Switch>

        <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />

          <Route path="/About" component={About} />

           <Route path="/notfound" component={NotFound} />
           <Route
              path="/ShoppingCart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleDelete}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />

            
             <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              )}
            />

          
        <Route path="/Home" exact component={Home} />
            <Redirect from="/" to="/Home" />
            <Redirect to="/notfound" />
        </Switch>
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;
