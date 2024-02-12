import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Regi1 = () => {
    const [data,setData]=useState('')
    const [data1,setData1]=useState('')
const navigate=useNavigate()

    let datachange=(val)=>{
        setData({...data,[val.target.name]:val.target.value})
        // console.log(data);
    }

    let datasave=(val)=>{
        val.preventDefault()
        setData1(data)
        console.log(data1,'final');
        navigate('/')
    }


  return (
    <div >
            <form onSubmit={datasave} className=' m-auto w-25 p-5 text-center   '>

                <input type="text" className='form-control m-3' onChange={datachange} name='Firstname' placeholder='First Name' />
                <input type="text" className='form-control m-3' onChange={datachange} name='Lastname' placeholder='Last Name' />
                <input type="text" className='form-control m-3' onChange={datachange} name='userid' placeholder='User ID' />
                <input type="text" className='form-control m-3' onChange={datachange} name='password' placeholder='Password' />
                <input type="text" className='form-control m-3' onChange={datachange} name='email' placeholder='Email' />
                <input type="Submit" className='btn btn-success m-auto'  name='' />

            </form>
        
    <div className='text-center '>
        
    <h3 className='text-danger '>Registration Details</h3>
    <h5>Name :{data1.Firstname} {data1.Lastname}</h5>
    <h5>User ID :{data1.userid}</h5>
    <h5>Password:{data1.password}</h5>
    <h5>Email :{data1.email}</h5>
    </div>

        
    </div>
  )
}

export default Regi1