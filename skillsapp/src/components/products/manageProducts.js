import React, { Component } from 'react';
import axios from 'axios'


class ManageProducts extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            product_name: "",
            description: "",
            price: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
    }

    componentDidMount() {
        axios
            .get("http://localhost:3001/api/getproducts")
            .then(response => {
                // console.log(response)
                this.setState({
                    products: response.data
                })
            })
            .catch(console.log)
    }

    addProduct() {

        let newProduct = {

            product_name: this.state.product_name,
            description: this.state.description,
            price: this.state.price
        }

        axios
            .post("http://localhost:3001/api/addproduct", newProduct)
            .then(response => response.data)
            .catch(console.log)
    }


    removeProduct(id) {
        axios
            .delete(`http://localhost:3001/api/removeproduct?id=${id}`)
            .then(response => response.data)
            .catch(console.log)
    }


    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    render() {
        console.log(this.state.products)
        return (
            <div>
                <h1>MANAGE PRODUCTS</h1>
                <div>
                    {this.state.products.map((product, index) => {
                        return (<div key={index}>
                            <div>{product.product_name}</div>
                            <div>
                                Price: ${product.price}
                            </div>
                            <div>
                                Description: {product.description}
                            </div>
                            <button onClick={() => this.removeProduct(product.id)}>REMOVE</button>
                            <br />
                        </div>

                        )
                    })}
                </div>
                <div>
                    <h3>Add Product</h3>
                    <div>
                        <div> Product Name: <input type="text" onChange={(e) => { this.handleChange("product_name", e.target.value) }} /></div>
                        <div>Product Description: <input type="text" onChange={(e) => { this.handleChange("description", e.target.value) }} /></div>
                        <div>Product Price: <input placeholer="Only Whole Numbers!" type="text" onChange={(e) => { this.handleChange("price", e.target.value) }} /></div>
                    </div>
                    <button onClick={this.addProduct}> ADD PRODUCT</button>


                </div>

            </div>
        )
    }
}
export default ManageProducts
