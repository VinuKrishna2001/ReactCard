import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0)
const [person,setPerson]=useState('')

let increment=()=>{
    setCount(count+1)
}
let decrement=()=>{
    if(count!=0){

        setCount(count-1)
    }
}
let update=()=>{
    setPerson({name:'dsds',age:23})
}
let a='fdfd'
  return (
    <div><h2>{count}</h2>
<h3>{person.name} {person.age}</h3>
<button onClick={increment} className='btn btn-dark'>increment</button>
<button onClick={decrement} className='btn btn-success '>decrement</button>
<button onClick={update}>update</button>

    </div>
  )
}

export default Counter