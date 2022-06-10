import React, { Component } from 'react'

export default class InputWithLabel extends Component {
  render() {
      const {labelText, value, type, name, onChange } =this.props
    return (
      <label> 
          <input 
      type={type}
      value = {value}
      name = {name}
      onChange = {onChange}/>
      {labelText}
      </label>
    )
  }
}
