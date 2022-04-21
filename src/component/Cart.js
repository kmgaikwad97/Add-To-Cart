import React, { Component } from 'react'

export default class Cart extends Component {
  AddToCart(id,title) {
    var emptyArray = [];
        emptyArray.push(id,title)
        console.log(`${emptyArray} Datass`);
  }
  render() {

      
    return (
      <div className="container">
          this is our cart page
      </div>
    )
  }
}
