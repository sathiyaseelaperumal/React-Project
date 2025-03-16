import React, { useState } from 'react'


const Booking = () => {
   
 

  let [carModel, setCarModel] = useState("");
  let [pickupDate, setPickupDate] = useState("");
  let [dropOffDate, setDropOffDate] = useState("");
  let [pickupLocation, setPickupLocation] = useState("");
  let [dropoffLocation, setDropoffLocation] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);


 
  
 

  let handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
 
 let handleClick=()=>{
   alert("You Booked SuccessFully")
 }
    
    

  return (
    <div >

      
<div className="min-h-screen bg-gray-100 flex justify-center items-center p-6" 
 data-aos="zoom in "data-aos-delay="600"> 
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Car Rental Booking</h2>
        
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Booking Confirmed!</h3>
            <p className="text-lg text-gray-600">Your booking details:</p>
            <div className="mt-4">
              <p className="font-semibold">Car Model: {carModel}</p>
              <p className="font-semibold">Pickup Date: {pickupDate}</p>
              <p className="font-semibold">Drop-off Date: {dropOffDate}</p>
              <p className="font-semibold">Pickup Location: {pickupLocation}</p>
              <p className="font-semibold">Drop-off Location: {dropoffLocation}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Car Model</label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car model"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Drop-off Date</label>
              <input
                type="date"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter pickup location"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter drop-off location"
                required
              />
            </div>

            <button id='b'
              type="submit"
              className="w-full py-3  text-white font-semibold rounded-lg  " 
            onClick={handleClick} >
              Confirm Booking
            </button>
          </form>
        )}
      </div>


      
    </div>
  
      

    </div>
  )
}

export default Booking