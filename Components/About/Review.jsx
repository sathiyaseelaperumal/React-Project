import React from 'react'
import { FaStar } from "react-icons/fa";
import AppStore from '../AppStore/AppStore';

const Review = () => {
  return (
   <div >
     <div id='ali'>
        <h1 className='text-5xl' id='h'>What Our Clients Say About Us</h1>
        <br />
        <p id='pa'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, reprehenderit! 
          
    </p>
    </div>
    
     <div id='rboxes' data-aos="zoom-in">

        <div id='rbox1'>
         <img className='rounded-full'  height={50} width={150} src="src/Components/About/IMG/513a1d88de41a7211e788f9813f80a4d.jpg" alt="" />
         <div className='star text-2xl text-amber-400'>
        <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
    </div>
    <div className='para'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus?</p>
    </div>

        </div>
        <div id='rbox2'>
        <img height={100} width={130} className='rounded-full'  src="src/Components/About/IMG/8d8114ddbcb7a28080b420a07a6247ed.jpg" alt="" />
        <div className='star text-2xl text-amber-400'>
        <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
    </div>
    <div className='para'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus?</p>
    </div>
   </div>
    <div id='rbox3'>
    
    <img height={100} width={150} className='rounded-full'  src="src/Components/About/IMG/920dbe3683abbc4a1ed7e6bb4d635b27.jpg" alt="" />
  
    <div className='  star text-2xl text-amber-400' >
        <FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
        
    </div>
    
    <div className='para'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus?</p>
    </div>
   
   
    
          </div> 
     </div>
     

     <div id='aps'>
      <AppStore></AppStore>
     </div>
   </div>
  )
}

export default Review