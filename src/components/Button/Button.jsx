import React, { Component } from 'react';

import style from './Button.module.scss'
export default class Button extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <>
           <button>{this.props.text}{this.props.text2}</button>
          
        </>
    )
  }
}