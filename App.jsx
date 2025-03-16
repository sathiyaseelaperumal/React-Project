import React, { useMemo } from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Components/Navbar/Nav.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Cars from './Components/Cars/Cars'
import Booking from './Components/Booking/Booking'
import "./Components/Home/Home.css"
import"./Components/About/About.css"
import "./Components/Services/Services.css"
import "./Components/Cars/Cars.css"
import "./Components/Booking/Booking.css"
import "./Components/About/Review"
import "./Components/About/Review.css"
import "./Components/AppStore/AppStore"
import "./Components/AppStore/AppStore.css"
import "./Components/Footer/Footer"
import "./Components/Footer/Footer.css"





let router=createBrowserRouter([
   

    {
        path:"/",
        element:<Navbar></Navbar>,
        children:[
            {
                index: true,  
                element: <Home />
              },

            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/car",
                element:<Cars></Cars>
            },
            {
                path:"/booking",
                element:<Booking></Booking>
            }
        ]
    }
])


const App = () => {


    // useMemo(()=>{
    //        alert("hey bro");
    //   },[1]);


  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App