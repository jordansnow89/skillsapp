import React, { Component } from 'react';
class Cart extends Component {
    constructor(props) {
        super(props)


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
                                {product.price}
                            </div>
                            <div>
                                {this.props.cart.description}
                            </div>

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