import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import {Input} from '../../components/Footer/Footer'
export default class HeaderWith3Buttons extends Component {
  render() {
    return (
      <>
       <Header >
            <Button text='1' text2 = 'first'/>
            <Button text='2'/>
            <Button text='3'/>
            <Input/>
    </Header>
   </>
    )
  }
}
