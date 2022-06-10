import React, { Component } from 'react'
import './Form.css'
import InputWithLabel from './input/InputWithLabel'
import Text from './Text/Text'

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            firstName: '',
            secondName:'',
            age:'',
            city:''
        }
    }


    handleChange = (e)=> {
        const { name, value } =e.target
        this.setState({[name]:value})
    }
  render() {
    return (
    <form className='form' action="">
        <InputWithLabel
        type='text'
        name = 'firstName'
        value = {this.state.firstName}
        labelText ='firstName'
        onChange = {this.handleChange}

        
        />

<InputWithLabel
        type='text'
        name = 'secondName'
        value = {this.state.secondName}
        labelText ='secondName'
        onChange = {this.handleChange}

        
        />

<InputWithLabel
        type='text'
        name = 'age'
        value = {this.state.age}
        labelText ='age'
        onChange = {this.handleChange}

        
        />

<InputWithLabel
        type='text'
        name = 'city'
        value = {this.state.city}
        labelText ='city'
        onChange = {this.handleChange}

        
        />

        

        <Text text = 'first name ' descText={this.state.firstName}/>
        <Text text = 'second name'  descText={this.state.secondName}/>
        <Text text = 'age name' descText={this.state.age}/>
        <Text text = 'city' descText={this.state.city}/>
    </form>
    )
  }
}

