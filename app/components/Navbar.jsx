import React from 'react';
import Link from 'next/link';
import { FaBlog } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center'>
      <Link href="/"><FaBlog className='text-3xl text-amber-900'/></Link>
      <ul className='flex items-center justify-center gap-4 my-5'>
        <Link className="hover:underline hover:underline-offset-4" href="/">Home</Link>
        <Link className="hover:underline hover:underline-offset-4" href="/contact">Contact</Link>
        <Link className="hover:underline hover:underline-offset-4" href="/blogs">Blogs</Link>
      </ul>
    </nav>
  )
}

export default Navbar
