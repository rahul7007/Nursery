import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import App from './components/App'
import Cart from './components/Cart'
import MyOrders from './components/MyOrders'
import Test from './Test'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/my-orders" exact component={MyOrders} />
                    <Route path="/product" exact component={AddProduct} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes