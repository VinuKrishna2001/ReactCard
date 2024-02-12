import React, { useState } from 'react'

function Counter1() {
    const [count,setCount]=useState(0)
    let inc=()=>{
        setCount(count+1)
    }
    let dec=()=>{
        if(count!=0)
            setCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
    </div>
  )
}

export default Counter1