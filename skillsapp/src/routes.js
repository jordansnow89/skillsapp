import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from './components/home/home'
import Products from './components/products/products'
import Cart from './components/products/cart/cart'
import ManageProducts from './components/products/manageProducts'



export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/manage" component={ManageProducts} />
    </Switch>
);
