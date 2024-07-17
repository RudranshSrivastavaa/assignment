import React, { useState } from 'react'

function Sum() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    
    const Input1 = (e)=>{
        setCount1(Number(e.target.value))
    }

    const Input2 = (e)=>{
        setCount2(Number(e.target.value))
    }
    const count=count1+count2
  return (
    <div>
      <input type="number" value={count1} onChange={Input1}></input>
      <input type="number" value={count2} onChange={Input2}></input>
      <h1>{count}</h1>
    </div>
  )
}

export default Sum
