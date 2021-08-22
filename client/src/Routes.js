import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import App from './components/App'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import MyOrders from './components/MyOrders'
import OrderPlaced from './components/OrderPlaced'
import Payment from './components/Payment'
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
                    <Route path="/product/:productId" exact component={AddProduct} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/payment-method" exact component={Payment} />
                    <Route path="/order-placed" exact component={OrderPlaced} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes