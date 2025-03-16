import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
import Review from '../About/Review'

const Services = () => {
  return (
    <div id='co'>
        <div id='title'>
             <h1 className='text-4xl'>Why  Choose Us..?</h1>
        </div>

       <div id='boxes' >
       <div id='box1'  data-aos="slide-right ">
          
          <FaCameraRetro  className='text-4xl text-amber-300 ml-8  hover:text-black' cla  ></FaCameraRetro>
         
        
          <h1 className='text-1xl '>Best Prices</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, explicabo?</p>
          <a href="">Learn more</a>
         </div>
        
        <div id='box2' data-aos="slide-right" data-aos-delay="400">
       
          <GiNotebook className='text-5xl text-amber-300 ml-8 hover:text-black'></GiNotebook>
         
        
          <h1 className='text-1xl '>Fast and Safe</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, explicabo?</p>
          <a href="">Learn more</a>
      
          
      

        </div>
        <div id='box3' data-aos="slide-right" data-aos-delay="600">
       
        <SlNote className='text-4xl text-amber-300 ml-8 hover:text-black'></SlNote>
       
          
          <h1 className='text-1xl '>Experience Drivers</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, explicabo?</p>
          
          <a href="">Learn more</a>
        </div>
       </div>

       <div id='rev'>
        <Review></Review>
       </div>
    </div>
  )
}

export default Services