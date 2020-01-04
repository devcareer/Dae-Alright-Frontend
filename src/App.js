import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'

import { connect } from "react-redux";
import Homepage from './Pages/Homepage';

class App extends Component {

  render(){
  return (

    <div className="App">
     <Switch>
     <Route  path="/" component={Homepage} />
       </Switch> 

     

    </div>
  
  );
}

}

export default connect() (App);
