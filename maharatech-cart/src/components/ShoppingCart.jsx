import React, { Component } from "react";
import Product from "./Product";



class ShoppingCart extends Component {
  
    render(){
        return (
          <React.Fragment>
            <h1>Shopping Cart</h1>
            <button onClick={this.props.onReset} className="btn btn-secondary btn-sm m-2">Reset</button>
            {this.props.products.map(product => (
             <Product 
             key={product.id}
             product={product}
             onIncrement={this.props.onIncrement}
             onDelete={this.props.onDelete} />

            ))}
          </React.Fragment>
        )
    }
}
export default ShoppingCart;