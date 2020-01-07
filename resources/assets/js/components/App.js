import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProduct from './NewProduct'
import UpdateProduct from './UpdateProduct'
import ProductsList from './ProductsList'
import SingleProduct from './SingleProduct'
import RemoveProduct from "./RemoveProduct"
import AlterStatusProduct from "./AlterStatusProduct";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ProductsList} />
            <Route path='/createProduct' component={NewProduct} />
            <Route path='/updateProduct/:id' component={UpdateProduct} />
            <Route path='/deleteProduct/:id' component={RemoveProduct} />
            <Route path='/alterStatusProduct/:id/:status' component={AlterStatusProduct} />
            <Route path='/singleProduct/:id' component={SingleProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
