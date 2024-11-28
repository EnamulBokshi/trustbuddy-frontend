import React from 'react'
import logo from '../assets/logos/trustbuddy-high-resolution-logo-transparent.png'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
function Footer() {
  return (
    <footer className = " flex justify-between py-12 px-5 bg-gray-600 mt-5">
        <div className = 'flex flex-col gap-3'>
            <img src={logo} className='w-12'/>
            <div className='flex gap-2 '>
                <Youtube />
                <Facebook/>
                <Linkedin />
                <Instagram />
            </div>
        </div>
        <div className='flex flex-col gap-y-3 text-white'>
            <h1>Quick Access</h1>
            <a href="#home" className='hover:text-gray-400 active:text-gray-400'>
                Home
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Reviews
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Registration
            </a>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <h1>About us</h1>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <h1>
                Resourses
            </h1>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
            <a href="#review" className='hover:text-gray-400 active:text-gray-400'>
                Login
            </a>
        </div>
    </footer>    
)
}

export default Footer;