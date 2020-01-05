import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import RestauMenuPage from './Pages/Restaurant/RestauMenuPage'
import Homepage from './Pages/Homepage'
import UserDashboard from './Pages/user-dashboard';

import ReviewOrder from './Pages/ReviewOrder'
import DashboardOrder from './Pages/user-dashboard/order-dashboard';
import OrderRefund from "./Pages/user-dashboard/dashboard-refund"

import Cart from './Pages/shopping-cart';




class App extends Component {

  render(){
  return (

    <div className="App">
     <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard/information" component={UserDashboard} />
        <Route exact path="/restaurant/menu" component={RestauMenuPage} />

        <Route exact path="/revieworder" component={ReviewOrder} />

        <Route exact path="/dashboard/order" component={DashboardOrder} />
        <Route exact path="/dashboard/refund" component={OrderRefund} />
        <Route exact path='/cart' component={Cart} />
     </Switch> 
    
    </div>
  
  );
}

}

export default App;
