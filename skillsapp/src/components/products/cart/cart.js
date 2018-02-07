import React, { Component } from 'react';
class Cart extends Component {
    constructor(props) {
        super(props)


    }

    componentWillReceiveProps() {
        console.log("I am receiving props")
        this.props.handleRemove
        this.props.cart
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>CART</h1>
                <div>
                    {this.props.cart.map((product, index) => {
                        return (<div key={index}>
                            <div>{product.name}</div>
                            <div>
                                ${product.price}
                            </div>
                            <div>
                                {this.props.cart.description}
                            </div>
                            <br />
                            <button onClick={(event, target, value) => this.props.handleRemove(product, index)}>REMOVE</button>
                            <br />



                        </div>

                        )
                    })}
                </div>
            </div>

        )
    }

}
export default Cart