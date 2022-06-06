
import React,{ Fragment, Component } from 'react';
import './App.css';

import Section from './components/Section/Section';
import {Footer, Input} from './components/Footer/Footer';
import HeaderWith3Buttons from './containers/HeaderWith3Buttons/HeaderWith3Buttons';

export default class App extends Component {
  constructor(props){
    super(props);


  }
  componentDidMount(){

  }
  componentDidUpdate(){

  }
  componentDidUnupdate(){

  }
  render(){
  return (
  
    <div>
       <HeaderWith3Buttons/>
       <Section />
       <Footer/>
    </div>
    
  )
}
}
