import React, { Component } from 'react'

export default class Text extends Component {

  
  render() {
    const { text, descText } = this.props

    return (
      <p>{text}:{descText}</p>
    )
  }
}
