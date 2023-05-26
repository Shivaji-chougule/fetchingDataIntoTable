import React,{useState} from 'react'
import Child from './Child'
import './Parent.css'



function Parent() {
  const[info,setInfo]= useState(100)

  function addHandler(){
    setInfo(info + 1)
  }

  return (
    <div>
      <h1>Parent</h1>
      
      <div className="parent">
    <h1>Counter:{info}</h1>
    <button onClick={addHandler}>AddValue</button>
      </div>
      <Child/>
    </div>
  )
}

export default Parent