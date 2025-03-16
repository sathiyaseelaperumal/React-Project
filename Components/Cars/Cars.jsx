  import React, { useState } from 'react'
  import { useNavigate } from 'react-router-dom'


  const Cars = ({theme}) => {

    let navi=useNavigate()

    let goTO=()=>{
      navi("/booking")
    }

    
    

    return (


  <div id='page'  className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} dark:bg-gray-950 duration-300`}  >
  <div id='main'>
        <div id='cbox1' data-aos="fade-down">
        <h1 className='ti'>Porche 918</h1>
        <img   width={200} src="src/Components/Images/bl.jpg" alt="" />
        <h1>$120/Day</h1>
      
      {/* <button className= 'text-1xl bg-amber-100 rounded-1xl hover:bg-black hover:text-yellow-300' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >Book Now</button>
        </div>

      <div id='cbox2' data-aos="fade-down"> 
      <h1 className='ti'>Ferrari</h1>
      <img height={200} width={200} src="src/Components/Images/reddy.jpg" alt="" />
      <h1>$100/Day</h1>

      {/* <button className= 'text-1xl bg-amber-100 text-black rounded-1xl hover:bg-black hover:text-yellow-300 ' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >Book Now</button>
      </div>
      
      <div id='cbox3' data-aos="fade-down">
      <h1 className='ti'>GT3 RS</h1>
      <img height={200} width={200} src="src/Components/Images/bca2dffe879a12046b632b946eb3d7dd.jpg " alt="" />
      <h1>$140/Day</h1>
    
      {/* <button className= 'text-1xl bg-amber-100 rounded-1xl hover:bg-black hover:text-yellow-300' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >Book Now</button>
      </div>




    



    </div>
    
    <div id='main2' data-aos="fade-up" >
      

      <div id='cbox4' >
        <h1 className='ti'>Lamborghini Huracan LP 610-4</h1>
        <img height={200} width={200} src="src/Components/Images/25813f70acaa5261ca192be53ad6d2c4.jpg" alt="" />

        <h1>$200/Day</h1>
      
      {/* <button className= 'text-1xl bg-amber-100 rounded-1xl hover:bg-black hover:text-yellow-300' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >
    Book Now
  </button>
        </div>

      <div id='cbox5'> 
      <h1 className='ti'>Audi R8</h1>
      <img height={200} width={200} src="src/Components/Images/white.jpg" alt="" />
      <h1>$150/Day</h1>

      {/* <button className= 'text-1xl bg-amber-100 text-black rounded-1xl hover:bg-black hover:text-yellow-300 ' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >Book Now</button>
      </div>
      
      <div id='cbox6'>
      <h1 className='ti' >Venom V5</h1>
      <img height={200} width={200} src="src/Components/Images/lo.jpg" alt="" />
      <h1>$170/Day</h1>
    
      {/* <button className= 'text-1xl bg-amber-100 rounded-1xl hover:bg-black hover:text-yellow-300' onClick={goTO}>Book Now</button> */}
      <button  
    className="text-xl bg-amber-100 rounded-xl hover:bg-black hover:text-yellow-300 text-black font-semibold px-4 py-1  shadow-lg transition-all duration-300 transform hover:scale-105 "
    onClick={goTO}
  >Book Now</button>
      </div>

    

    </div>


  <div id='btn'>
  <button  className= 'text-1xl bg-blue-500 border-1  text-white rounded-2xl hover:bg-black hover:text-yellow-300  py-1 px-5' >Show more</button>
  </div>

    </div>
    )
  }

  export default Cars