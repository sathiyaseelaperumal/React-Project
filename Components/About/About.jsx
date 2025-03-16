import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Services from '../Services/Services';


const About = () => {
  const { theme } = useOutletContext();
  return (
    <div>
      <div id='about' className={` ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} dark:bg-gray-950 duration-300`}>
      <div id='ab1'>
      <img data-aos="slide-right" data-aos-duration="1500" height={300} width={500} src={theme === "dark" ? "src/Components/Images/red.jpg" : "src/Components/Images/reddy.jpg"}></img>
    </div>
    <div id='ab2' >
      <h1  className='text-5xl' data-aos="fade-up" >About Us</h1>
      <br />
      <div>
        
        <p data-aos="fade-up" data-aos-delay="600">
          Lorem ipsum dolor sit amet <br />
           consectetur adipisicing elit. <br />
           labore. Sit corporis, natus quod <br /> quam veritatis assumenda vero <br />
            accusantium architecto!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet <br />
           consectetur adipisicing elit. <br />
            Accusamus, numquam!
        </p>
        <br />
        <button   className='mt-4 px-4 py-2 bg-yellow-300 text-black rounded hover:bg-black hover:text-yellow-300' >Get Started</button>
      </div>
    </div>
    
   
    </div>
    <div id='serv'>
      <Services></Services>
    </div>
  
    
   
    </div>
  )
}

export default About