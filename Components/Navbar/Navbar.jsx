import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useOutletContext } from 'react-router-dom'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from '../Home/Home';



const Navbar = () => {
  let [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
  }, [theme]);
  


  // let location = useLocation();

  
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  },[])

  let toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  },[])
  return (
  
    <div>
      <div id='container' className={`shadow-md ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} dark:bg-gray-950 duration-300`}>
        <div id='nav1 ' className='inline-block cursor-pointer hover:border-b-2 py-2 hover:text-yellow-400'>
          <li className='text-2xl'><Link className='link' to="/" theme={theme} settheme={setTheme} >Luxury Car Rentals</Link></li>
          
        </div>
      

        <div id='nav2' className="space-x-12 cursor-pointer ">
          <li className="inline-block"> <Link className='link inline-block cursor-pointer hover:border-b-2 py-2 hover:text-yellow-400' to="/home">Home</Link></li>
          <li className="inline-block"> <Link className='link inline-block cursor-pointer hover:border-b-2 py-2 hover:text-yellow-400' to="/about">About</Link></li>
          <li className="inline-block"> <Link className='link inline-block cursor-pointer hover:border-b-2 py-2 hover:text-yellow-400' to="/car">Cars</Link></li>
          <li className="inline-block"> <Link className='link inline-block cursor-pointer hover:border-b-2 py-2 hover:text-yellow-400' to="/booking">Booking</Link></li>
          <li className='inline-block' onClick={toggleTheme}>

            <div>
              {theme === "dark" ? (
                <BiSolidSun className='text-2xl' />
              ) : (
                <BiSolidMoon className='text-2xl' />
              )}
            </div>
          </li>
        </div>

       
      </div>

         {/* Show <h1>hii</h1> ONLY on the root ("/") path */}
      {/* {location.pathname === "/" && <Home></Home>} */}

      

      <div id='display' className={theme === "dark" ? "text-white" : "text-black"}>
        <Outlet context={{theme}} />
      </div>


      

    </div>
  )
}

export default Navbar