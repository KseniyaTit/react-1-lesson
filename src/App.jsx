
import React,{ Fragment, Component } from 'react';
import './App.scss';

import Section from './components/Section/Section';
import {Footer, Input} from './components/Footer/Footer';
import HeaderWith3Buttons from './containers/HeaderWith3Buttons/HeaderWith3Buttons';
import Count from './components/Count/Count';
import Form from './components/Form/Form';

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
        <Form/>
       <HeaderWith3Buttons/>
       <div className='div1'>
         <p className='p1'>paragraph1</p>
       </div>
       
       <Count/>
       <Section />
       <Footer/>
     
       
    </div>
    
  )
}
}
