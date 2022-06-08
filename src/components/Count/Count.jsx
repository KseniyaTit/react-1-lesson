
import React, { useState} from 'react'


/*
function Count() {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }



  return (
    <div>
        <p>{count}</p>
        <button onClick = {inc}>+</button>
        <button onClick = {dec}>-</button>
    </div>
  )
}
*/


function Count() {
    const [visible, setVisible] = useState(true)
    const handleShow =()=>{
        setVisible(!visible)
    }
    

 
  



  return (
    <div>
        <p>{visible && 'dfdfdf'}</p>
        <button onClick = {handleShow}>{visible ? 'hide' :'show'}</button>
       
    </div>
  )
}



export default Count