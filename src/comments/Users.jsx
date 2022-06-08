import React, { Component , Fragment} from 'react'

export default class Users extends Component {
constructor (props){
    super(props)
    this.state = {
        list:[]
    }
}


componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      this.setState({
          list:json
      })
  }
    )
}
  render() {
    const {list}= this.state
    return (
      <>
      {list.map(({id,name, username,email})=>{
          return <Fragment key = {id}>{name} {username} {email}</Fragment>
      })}
        </>
    )
  }
}
