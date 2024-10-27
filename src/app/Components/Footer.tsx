import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";

function Footer() {
  return (
   <section  id="sectioncontact" className='absolute right-0 left-0' >
<footer className='bg-white-200   text-sm '>
<div className=' flex gap-4 place-content-center mb-3 text-white cursor-pointer'>
<FaFacebookSquare />  
<FaInstagram />
<SlEnvolopeLetter />
  
  </div>
<div className=' text-white text-center' > &#169; All Copyrights Are Reserved</div>



</footer>

   </section>

  )
}

export default Footer