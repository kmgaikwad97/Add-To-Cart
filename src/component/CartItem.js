// Child Component
import React, { Component } from 'react'

export default class CartItem extends Component {
    

    render() {
        return (
            <tr>
                <td>{this.props.cart.name}</td>
                <td>{this.props.cart.price}</td>
                <td>{this.props.cart.qty}</td>
                <td>{this.props.cart.total}</td>


                <td>
                    <button onClick={()=>this.props.onIncrement(this.props.cart)} className="btn btn-success">Add(+)</button>
                    <button onClick={()=>this.props.onDecrement(this.props.cart)} className="btn btn-warning">Remove(-)</button>
                </td>
            </tr>
        )
    }
}
