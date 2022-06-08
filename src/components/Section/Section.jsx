import React,{Component} from 'react';
import './Section.css'
import Confetti from 'react-confetti'
export default  class Section extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      isVisible: true
      /*this.inc = this.inc.bind(this)*/

    }



  }
  show =() => {
    this.setState((prevState)=>{
      return {isVisible: !prevState.isVisible}
    })
  }



  inc = () =>{
    this.setState({count: this.state.count + 1})

  }
  dec = () =>{
    this.setState((prevState)=>{
      return{
        count: prevState.count -1
      }
    })
    this.setState((prevState)=>{
      return{
        count: prevState.count -1
      }
    })
  }

 

  render(){
    console.log('render')
    return(
      <section className='section-body'>
         <p>1</p>
         <div><button onClick={this.inc} className='btn'>+</button> 
       <button onClick={this.dec} className='btn'>-</button></div>
     </section>
    )
  }

componentDidMount(){
  setInterval(()=> {
    console.log('componentDidMount')
  },2000) 

}
componentWillUnmount(){
  clearInterval()
}

componentDidUpdate(){
  console.log('componentDidUpdate')
}
}