import React, { useRef } from 'react'
import { BsBorderStyle } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { useDashoboard } from '../contexts/dashboard/DashboardContext';
import { FaBarsProgress } from "react-icons/fa6";

function Sidebar() {
  // const ref = useRef(null);
  const {setActiveSection} = useDashoboard();
  const active = 'rounded-s-lg p-3 text-2xl mb-1 cursor-pointer';
  const parentNode = useRef(null)
  const handleActive = (e)=>{
    const allChild = parentNode.current.childNodes;
      allChild.forEach(element => {
        if(element.classList.contains("bg-gray-300")) {
          element.classList.remove('bg-gray-300')
        }
      });
      e.target.classList.add('bg-gray-300');
      setActiveSection(e.currentTarget.id)
  }
  return (
    <div className='w-16 h-dvh py-2  ps-1 bg-sky-700 fixed left-0' ref={parentNode}>
        <li  id='home' name='home' className={`${active} bg-gray-300 hover:bg-gray-200 hover:scale-105`} onClick={handleActive}><FaBarsProgress /></li>
        <li id='profile' name='profile' className={`${active} hover:bg-gray-200 hover:scale-105`} onClick={handleActive}><RiProfileFill/></li>
        <li  id='review' name='review' className={`${active} hover:bg-gray-200 hover:scale-105`} onClick={handleActive}><MdReviews/></li>
        <li  id='setting' name='setting' className={`${active} hover:bg-gray-200 duration-300 hover:scale-105`} onClick={handleActive}><FaGear/></li>
    </div>
  )
}

export default Sidebar