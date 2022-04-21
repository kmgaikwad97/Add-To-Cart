import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {
    
    constructor() {
        super()
        this.state = {
            apidata: []
            
        }
    }

    
    AddToCart(id,title) {
        // got the data in empty array

        var emptyArray = [];
        emptyArray.push(id,title)
        console.log(`${emptyArray} data`);


        console.log("button pressed");
        var record = JSON.parse(localStorage.getItem("cart"));
        console.log(record);
        console.log(id,title);
        const identity = `${id} ${title}`;
        console.log(identity);

        var ans = localStorage.getItem("cart")
        if (ans === null) {
            var record = [id]
            console.log(`${record} This is record`);
            // var record = [identity]
            localStorage.setItem("cart", JSON.stringify(record))
            console.log(`${ans} cart`);
        }
        else {
            var result = JSON.parse(ans)
            result.push(identity)
            console.log(`${result} This is results`);
            localStorage.setItem("cart", JSON.stringify(result))
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    apidata: res.data
                })
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.apidata.map((val) =>
                            <div className="col-3 text-center">
                                <h1>{val.id}</h1>
                                <div className='img-box'>
                                    <img src={val.image} className="img-fluid" />
                                </div>
                                <h2>{val.title}</h2>
                                <h3>Price : {val.price}</h3>
                                {/* <h5>{val.category}</h5>
                                <p>{val.description}</p> */}
                                <div className='btns'>
                                    <button onClick={() => { this.AddToCart(val.id,val.title) }} className='btn btn-warning'>Add To Cart</button><br /><br />
                                    <button className='btn btn-success'>Buy</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}
