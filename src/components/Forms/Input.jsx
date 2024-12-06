import React from 'react'

function Input({pholder,title,type = 'text',isReq = true,option = [],error='',value='',onChange,name}) {
  return (
  <div>
    <label className='text-gray-500 py-0 my-0 font-bold  hover:text-gray-700'>
        {title}
    </label>
    {
      error&&<label className='text-red-600'>{error}</label>
    }
    {   
        type == 'select' ? 
        <select value={value} name={name} onChange={onChange} className='w-full bg-white py-3 px-2 rounded-lg  text-gray-500'  required = {isReq}>
        {option.map((opt,index) => <option  value={opt.toLowerCase()} key={index}>{opt.toUpperCase()}</option>)}
        </select>
        : 
        type == 'textarea'? <textarea name={name} onChange={onChange} value={value} placeholder={pholder} className={error? `w-full bg-white py-3 px-2 rounded-lg  text-gray-500 ring-1 ring-red-600`:`w-full bg-white py-3 px-2 rounded-lg  text-gray-500 ring-1 `} required= {isReq}> </textarea>:

        <input name={name} onChange={onChange} value={value} placeholder={pholder} type={type} className={error? `w-full bg-white py-3 px-2 rounded-lg  text-gray-500 ring-1 ring-red-600`:`w-full bg-white py-3 px-2 rounded-lg  text-gray-500 ring-1 `}  required = {isReq} />
     
}
  </div>
  )
}

export default Input