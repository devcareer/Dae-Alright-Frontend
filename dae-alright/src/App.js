import React, { Component } from 'react';
import Button from '../src/components/Button/Button.component';
import FormInput from './components/FormInput/FormInput.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

class App extends Component {

  render(){
  return (
    <div className="App">
      <h1>dae-Alright</h1>
      <Button btnDetails={' log in'} className={'button-lg'} />
      <Button btnDetails={' Sign in with facebook'} className={'button-lg'} color={'steelblue'} icons={<FontAwesomeIcon icon={faFacebookSquare}  size='lg'/>} bgColor={'red'}/>
      <Button btnDetails={'Sign in with facebook'} className={'button-lg'} color={'tomato'} icons={<FontAwesomeIcon icon={faGooglePlusG}  size='lg'/>}  bgColor={'purple'}/>
      <Button btnDetails={' Proceed to payment'} className={'button-xlg'}   />
      <Button btnDetails={' Find Food'} className={'button-sm'}   />
      <Button btnDetails={' Find Food'} className={'button-sm'}  bgColor={'whitesmoke'} color={'darkkhaki'} />
      <FormInput type={'email'} placeholder={'Email'}/>
      <FormInput type={'password'} placeholder={'password'} height={'48px'} width={'15rem'}/>
      <FormInput type={'email'} placeholder={'Your Input an be anything'} />
    </div>
  );
}
}

export default App;
