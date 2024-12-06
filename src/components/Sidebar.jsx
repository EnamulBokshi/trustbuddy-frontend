import React, { useRef } from 'react'
import { BsBorderStyle } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";

function Sidebar() {
  const active = 'rounded-s-lg p-3 text-2xl mb-1 cursor-pointer';
  const parentNode = useRef(null)
  const handleActive = (e)=>{
    const allChild = parentNode.current.childNodes;
      allChild.forEach(element => {
        if(element.classList.contains("bg-gray-300")) {
          element.classList.remove('bg-gray-300')
        }
      });
    e.target.classList.add('bg-gray-300') ;
  }
  return (
    <div className='w-16 h-dvh py-2  ps-1 bg-sky-700 fixed left-0' ref={parentNode}>
        <li className={`${active} bg-gray-300`} onClick={handleActive}><RiProfileFill className={''}/></li>
        <li className={`${active}`} onClick={handleActive}><BsBorderStyle/></li>
        <li  className={`${active}`} onClick={handleActive}><MdReviews/></li>
        <li  className={`${active}`} onClick={handleActive}><BsBorderStyle/></li>
        <li   className={`${active}`} onClick={handleActive}><FaGear/></li>
    </div>
  )
}

export default Sidebar