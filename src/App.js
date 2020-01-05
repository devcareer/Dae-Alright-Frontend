import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import RestauMenuPage from './Pages/Restaurant/RestauMenuPage'
import Homepage from './Pages/Homepage'
import UserDashboard from './Pages/user-dashboard';





class App extends Component {

  render(){
  return (

    <div className="App">
     <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="/dashboard/information" component={UserDashboard} />
        <Route exact path="/restaurant/menu" component={RestauMenuPage} />
     </Switch> 
    
    </div>
  
  );
}

}

export default App;
