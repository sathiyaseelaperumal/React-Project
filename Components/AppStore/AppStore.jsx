import React from 'react'
import Footer from '../Footer/Footer'

const AppStore = () => {
  return (
    <div>
        <div id='appbox'>
       
      <div id='he'>
      <h1 className='get text-5xl  '>Get Started With Our App</h1>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, laudantium. Ad eum doloremque ipsam dolorem.</p>
      <br />
      <p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolore?</p>
      </div>


     
     <div id='appimg'>
     <div>
        <img className='im' width={150} src="src/Components/AppStore/googleplay.png" alt="" />
      </div>

    <div>
     <img className='im' src="src/Components/AppStore/images (1).png" alt="" />
    </div>
      
     </div>
         


        </div>
        
        <div id='fo'>
          <Footer></Footer>
        </div>
      
    </div>
  )
}

export default AppStore