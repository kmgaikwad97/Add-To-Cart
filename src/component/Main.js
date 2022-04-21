import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Header from './Header';
import CartComponentExample from './CartComponentExample';

export default class Main extends Component {
    render() {
        return (


            <div className="container">

                <BrowserRouter>

                    <Header/>

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="product" element={<Product />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="cartcomp" element={<CartComponentExample />} />
                        

                    </Routes>

                    <Footer/>

                </BrowserRouter>

            </div>

        )
    }
}
