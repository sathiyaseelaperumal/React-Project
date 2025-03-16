import React from 'react'
import { useOutletContext } from 'react-router-dom'
import About from '../About/About';

const Home = () => {
  const outletContext = useOutletContext();
  const theme = outletContext?.theme || "dark";

  return (
    <div>
      <div id='home'>
      <div id='home1'>
        <div id='let'>
          <h3 data-aos="fade-up"  className='text-3xl text-amber-300' >Sparky</h3> <br />
          <h1 data-aos="fade-up" data-aos-delay="600"  className='text-5xl'>Car Rentals</h1>
        </div>
        <br />
        <div>
          <p data-aos="fade-up" data-aos-delay="1000" >
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Odit alias optio expeditbr <br />
            ab et quam saepe repudiandae mollitia <br />
            aliquid sed? Neque explicabo quaerat iste <br />
            est atque odio magni ipsa aliquam. <br />
          </p>
        </div>
        <div id='btn'>
          <button data-aos="fade-up" data-aos-delay="1500"  className='mt-4 px-4 py-2 bg-yellow-300 text-black rounded hover:bg-black hover:text-yellow-300'>Get Started</button>
        </div>
      </div>
      <div data-aos="slide-left" data-aos-duration="1500">
        <img height={300} width={500} src={theme === "dark" ? "src/Components/Images/blacky.jpg" : "src/Components/Images/bca2dffe879a12046b632b946eb3d7dd.jpg"}
         alt="" className='relative z-10 max-h-[600px] sm:scale-125' />
      </div>
      
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
   <div id='dip'>
   <About></About>
   </div>
    
    </div>
  )
}

export default Home