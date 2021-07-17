import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Test from './Test'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/test" exact component={Test} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes