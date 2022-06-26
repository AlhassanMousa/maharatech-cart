import React from "react";
import Cart from './Cart';


//component

const Menu = (props) => {
    return ( 
    <React.Fragment>
        <h1 style={{textAlign:"center"}}>Menu</h1>
        <table className="table">
             <thead>
               <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Cart Status</th>
                </tr>
            </thead>
           <tbody>
            {props.products.map(product =>(
                <tr key={product.id}>
                <td >{product.name}</td>
                <td >{product.price}</td>
                <td><Cart onClick={props.onClick} product={product} /></td>
              </tr>
            ))}
           </tbody> 
        </table>
    </React.Fragment>


     );
}
 
export default Menu;

