import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Regi = () => {
    const [data,setData]=useState('')
    const [data1,setData1]=useState('')
    const tologin=useNavigate()

let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
}

let handlesubmit=(event)=>{
    event.preventDefault()
    setData(data)
    console.log(data,'final');
    tologin('/regi1')
}
  return (
    <div className='text-center '>
        <h2>Username : {data.username}</h2>
        <h2>Password : {data.password}</h2>
        <h2>name: {data.name}</h2>
<form onSubmit={handlesubmit} className='text-center w-25 m-auto '>
    <input type="text" className='form-control m-3' onChange={handleChange} placeholder='username' name="username" id="" />
    <input type="text" className='form-control m-3'onChange={handleChange} placeholder='password' name="password" id="" />
    <input type="text" className='form-control m-3'onChange={handleChange} placeholder='name' name="name" id="" />
    <input type="submit" name="" id="" />
</form>

    </div>
  )
}

export default Regi