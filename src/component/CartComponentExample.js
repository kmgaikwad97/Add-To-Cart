// Parent Component

import React, { Component } from 'react'
import CartItem from './CartItem'
import "./CartStyle.css"

export default class CartComponentExample extends Component {

    state = {
        cartItems: [
            { "id": 1, "name": "Pizza", "qty": 0, "price": 100, "total": 0 },
            { "id": 2, "name": "Burger", "qty": 0, "price": 50, "total": 0 },
            { "id": 3, "name": "Fries", "qty": 0, "price": 80, "total": 0 },
            { "id": 4, "name": "Sandwich", "qty": 0, "price": 150, "total": 0 },
        ],
    }

    // state = {
    //     itemname: this.props.nameItem,
    //     qty: this.props.qty,
    //     price: this.props.price,
    //     total: this.props.total
    // }

    increaseItem = (cart) => {

        // console.log("INC Cart Calling");
        // console.log(cart);
        cart.qty = cart.qty + 1
        console.log(cart.qty);
        this.setState({ cartItems: this.state.cartItems })
    }

    decreaseItem = (cart) => {

        console.log("DeC Cart Calling");
        console.log(cart);
        if (cart.qty > 0) {
            cart.qty = cart.qty - 1;
            cart.total = cart.qty * cart.price;

            this.setState({ cartItems: this.state.cartItems })

        }
    }

    removeItems=()=>{
        console.log(this.state.cartItems);
        for(var key in this.state.cartItems){
            this.state.cartItems[key].qty = 0;
            this.state.cartItems[key].total = 0;
        }

        this.setState({cartItems:this.state.cartItems})

    }

    render() {
        return (
            <>
                <h1>CartComponentExample</h1>
                <button className='btn btn-danger' onClick={this.removeItems}>Remove All Items</button>
                <table border="1">
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>

                    {
                        this.state.cartItems.map((cart =>

                            <CartItem cart={cart} onIncrement={this.increaseItem} onDecrement={this.decreaseItem} />

                        ))
                    }


                    {/* <CartItem nameItem="Pizza" />
                    <CartItem nameItem="Burger" />
                    <CartItem nameItem="Fries" />
                    <CartItem nameItem="Sandwich" /> */}



                    <tr>
                        <th colSpan="2">Total Amount</th>
                        <th>
                            {this.state.cartItems.reduce(
                                (total, cart) => total + cart.qty * cart.price, 0
                            )}
                        </th>
                        <th>Quantity</th>
                        <th>
                            {
                                this.state.cartItems.reduce((total,cart)=>total+cart.qty,0)
                            }
                        </th>
                    </tr>

                </table>
            </>
        )
    }
}