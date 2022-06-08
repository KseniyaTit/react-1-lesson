import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
      
    const {sayHi, time } = this.props
    return (
      <>Hello{sayHi} {time}</>
    )
  }
}

