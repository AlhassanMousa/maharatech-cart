import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Product extends Component {

    getClasses() {
        return this.props.product.count === 0
            ? "badge badge-warning m-2"
            : "badge badge-primary m-2";
    }

    render() {
        const { product, onIncrement, onDelete } = this.props;
        return (
          <div className="row">
            <div className="col-2">
              <span>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </span>
            </div>
            <div className="col">
              <span className={this.getClasses()}>{product.count}</span>
              <button
                onClick={() => onIncrement(product)}
                className="btn btn-primary btn-sm"
              >
                +
              </button>
              <span style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
                <i className="fas fa-trash m-2" />
              </span>
            </div>
          </div>
        );
      }
    }



export default Product;