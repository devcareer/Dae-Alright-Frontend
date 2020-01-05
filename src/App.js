import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Pages/Homepage'
import UserDashboard from './Pages/user-dashboard';
import Cart from './Pages/shopping-cart';




class App extends Component {

  render(){
  return (

    <div className="App">
     <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="/dashboard/information" component={UserDashboard} />
        <Route exact path='/cart' component={Cart} />
     </Switch> 
     
    </div>
  
  );
}

}

export default App;
