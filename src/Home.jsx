import React from 'react'
import img1 from '../src/img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.webp'
import img6 from './img6.jpg'
import Pic from './Grid'

export const Home = () => {
    let person=[
        {
          image:img1,
          named:'Adam Jonson new',
          field:'Developer',
          class:'bg-black text-white'
        },
        {
          image:img2,
          named:'Nicole Scavo',
          field:'Manager' ,
        },
        {
          image:img3,
          named:'Marco Larson',
          field:'Manager' ,
        },
        {
          image:img4,
          named:'Linda Larson',
          field:'Designer' ,
        },
        {
          image:img5,
          named:'Mary Hudson',
          field:'Developer' ,
        },
        {
          image:img6,
          named:'Adam Jonson',
          field:'Developer' ,
          class:'bg-black text-white'
        }
      ]
  return (
    <div>
        <div className='d-flex flex-wrap w-50 m-auto gap-5'>
  {person.map((item)=>(
    
      
      <Pic image={item.image} named={item.named} field={item.field} class={item.class}/>
    
  ))}
  </div>
    </div>
  )
}
