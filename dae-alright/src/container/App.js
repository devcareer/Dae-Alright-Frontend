import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormInput from '../components/formInput/formInput.component';


class App extends Component {

  render(){ 
  return (
    <div className="App py-4">
      <h1>dae-Alright</h1>
      <FormInput />
    </div>
  );
}
}

export default App;
