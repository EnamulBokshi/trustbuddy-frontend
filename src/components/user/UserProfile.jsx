import React, { useEffect, useState } from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { useUser } from '../../contexts/users/userContext';
function UserProfile({user}) {

    // const {c_user} = useUser()

    const {updateUser,setUser} = useUser(); 
    const [username,setUsername] = useState('');
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [age,setAge] = useState(0);
    const [gender,setGenger] = useState('');
    const [address,setAddress] = useState('setAddress')
    const [isEditable,setIsEditable] = useState(false);
    const [image,setImage] = useState('')
    const [id,setId] = useState('')


    // console.log(user.id)
    const handleSave = (e)=>{
        e.preventDefault();
        // setUser({...user,name:fullname,username,email,phone,age,gander,address})
        const user = {
            id,
            name:fullname,
            username,
            email,
            age,
            phone,
            gender,
            address,
            image
        }

        updateUser(id,user)
    }
    useEffect(()=>{
       setId(user.id);
       setUsername(user.username);
       setEmail(user.email);
       setFullName(user.name);
       setPhone(user.phone)
       setAge(user.age)
       setAddress(user.address)
       setGenger(user.gender)
       setImage(user.image)
    },[])

  return (
    <div className='bg-neutral-300 p-4 shadow-lg rounded-lg'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center justify-start'>
                {/* */}
               {
                image ?  <img src={image} alt=""  className='w-20 ring h-20 rounded-full'/>:
                    <FaUserGraduate className='rounded-full text-8xl'/> 
               }
                <div>
                    <h1>{user.username}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
            <button  className='bg-sky-600 text-white rounded-lg px-4 py-2' onClick={()=> setIsEditable(!isEditable)}>{
                isEditable? <span onClick={handleSave}>Save</span> : 'Edit'
                }</button>
        </div>
        <div className='p-10'>
            <form >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2'>
                <div>
                    <h2>Full Name</h2>
                    <input type="text" onChange={(e)=>setFullName(e.target.value)}  value={fullname} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100' disabled = {!isEditable} />

                </div>
                <div>
                    <h2>Email</h2>
                    <input type="text"  onChange={(e)=> setEmail(e.target.value)} value={email} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100'  disabled = {!isEditable}/>
                </div>
                <div>
                    <h2>Phone</h2>
                    <input type="text"  onChange={(e)=> setPhone(e.target.value)} value={phone} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100'  disabled = {!isEditable}/>
                </div>
                <div>
                    <h2>Gender</h2>
                    <input type="text"   value={gender} onChange={(e) => setGenger(e.target.value)} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100'  disabled = {!isEditable}/>
                </div>
                <div>
                    <h2>Age</h2>
                    <input type="text" onChange={(e) => setAge(e.target.value)}  value={age} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100'  disabled = {!isEditable}/>
                </div>
                <div>
                    <h2>Profile Photo</h2>
                    <input type="text" onChange={(e) => setImage(e.target.value)}  value={image} className='w-full p-2 rounded-lg bg-neutral-400 text-gray-100'  disabled = {!isEditable}/>
                </div>
                
                <div className='mt-10'>
                    <h2>Addess:</h2>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}  value={address} className='w-full p-2 rounded-lg bg-neutral-300 text-sky-800 italic'  disabled = {!isEditable}/>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}
export default UserProfile