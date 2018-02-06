import React, { Component } from 'react';
import { products } from './productlist'
import Cart from './cart/cart'

class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }

        this.handleClick = this.handleClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    handleClick(value) {
        this.addToCart(value);
    }

    addToCart(product) {
        const newCart = this.state.cart;
        newCart.push(product);
        this.setState({
            cart: newCart
        })
    }

    render() {

        return (
            <div>
                <h1> Products</h1>

                <div>
                    {products.map((product, index) => {
                        return (<div key={index}>
                            <div>{product.name}</div>
                            <div>
                                {product.price}
                            </div>
                            <div>
                                {product.description}
                            </div>
                            <button onClick={(event, target, value) => this.handleClick(product)}>BUY</button>
                            <br />
                            <br />



                        </div>

                        )
                    })}
                </div>

                <Cart cart={this.state.cart} />
            </div>)
    }
}

export default Products
