import React, { Component } from 'react';
import { products } from './productlist'
import Cart from './cart/cart'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }

        this.handleClick = this.handleClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }



    componentDidMount() {
        console.log(this.props)

    };


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

    handleRemove(product, index) {
        const newCart = this.state.cart;
        newCart.splice(index, 1, )
        this.setState({
            cart: newCart
        })
    }

    handleSelect(val, product) {

        product.quantity = val
    }

    render() {

        return (
            <div>
                <h1> Products</h1>
                <Link to="/manage"> MANAGE PRODUCTS </Link>

                <div>
                    {products.map((product, index) => {
                        return (<div key={index}>
                            <div>{product.name}</div>
                            <div>
                                Price: ${product.price}
                            </div>
                            <div>
                                Description: {product.description}
                            </div>
                            <select onChange={(e) => this.handleSelect(e.target.value, product)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>

                            <br />
                            <button onClick={() => this.handleClick(product)}>BUY</button>
                            <br />
                            <br />



                        </div>

                        )
                    })}
                </div>

                <Cart cart={this.state.cart} handleRemove={this.handleRemove} />
            </div >)
    }
}

export default Products
