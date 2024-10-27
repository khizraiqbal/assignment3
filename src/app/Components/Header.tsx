import React from 'react'
import Link from 'next/link';

function Header() {
  return (
      <div className='inline-flex cursor-pointer  text-white' >
      <Link href='#sectionhome'className='ms-[760px]'>Home</Link>
      <Link href='#sectionabout'className='ml-[24px]' >About Us</Link>
      <Link href='#sectioncontact' className='ml-[24px]'>Contact Us</Link>
      
    </div>)
}

export default Header;