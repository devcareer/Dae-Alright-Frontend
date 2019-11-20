import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'

import Homepage from './Pages/Homepage'
import UserDashboard from './Pages/user-dashboard';
import SignIn from './components/Modal/SignInModal'

class App extends Component {

  render(){
  return (

    <div className="App">
     <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="/dashboard/information" component={UserDashboard} />
     </Switch> 
     
    </div>
  
  );
}

}

export default App;
