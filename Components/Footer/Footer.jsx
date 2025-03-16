import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer' >
    
     <div id='foot'  className='mt-2'>
         
         <h1 className='text-4xl'>Car Rental</h1>
      <br />
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Placeat, aliquid.</p>
  <br />
         <div className='flex items-center gap-3'>
            <FaLocationArrow></FaLocationArrow>
            <p>Bengaluru,Karnadaka</p>
         </div>
      
      <div className='flex items-center gap-3'>
        <FaMobileAlt></FaMobileAlt>
        <p>+91 7695874328</p>
      </div>
       
       <div className='flex items-center gap-3 mt-6'>
        <FaInstagram className='text-2xl hover:text-pink-600'></FaInstagram>
        <FaFacebook className='text-2xl hover:text-blue-500'></FaFacebook>
        <FaLinkedin className='text-2xl hover:text-blue-500'></FaLinkedin>
       </div>
     
      
   
 
       
     </div>
    
    <div id='foot2' className=' mt-2'>
        <h1 className='text-3xl'>Important Links</h1>
        
     <div className='grid list-none cursor-pointer mt-2 '>
     <span>&#11162;<li className="inline-block"> <Link className='link' to="/home">Home</Link></li></span>
     <span>&#11162;<li className="inline-block"> <Link className='link' to="/about">About</Link></li></span>
     <span>&#11162; <li className='inline-block'>Contact</li></span>
     <span>&#11162; <li className='inline-block'>Blog</li></span>
     </div>
       
    </div>

    <div id='foot2' className=' mt-2'>
        <h1 className='text-3xl'>Important Links</h1>
        
     <div className='grid list-none cursor-pointer mt-2 '>
     <span>&#11162;<li className="inline-block"> <Link className='link' to="/home">Home</Link></li></span>
     <span>&#11162;<li className="inline-block"> <Link className='link' to="/about">About</Link></li></span>
     <span>&#11162; <li className='inline-block'>Contact</li></span>
     <span>&#11162; <li className='inline-block'>Blog</li></span>
     </div>
       
    </div>

   
               
    </div>
  )
}

export default Footer