import React, { useContext, useState } from 'react'
import UserContext from '../contexts/users/userContext'
import { Navigate,Link } from 'react-router'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import { User } from 'lucide-react';
import { FaUserTie } from "react-icons/fa";
function Login() {
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const {user,setUser} = useContext(UserContext)
    const [message,setMessage] = useState("")
    if(user) return <Navigate to = '/' />
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user.username === username || user.password === password){
            return <Navigate to='/writerev' />

        }
        setMessage("Wrong email or password! please try again!")
    }
  return (
    <>
        <Nav/>
        <section className='py-20 bg-gray-300 flex justify-center items-center'>
            <div className='p-5 bg-gray-500 rounded-lg'>
                <div className='py-10 grid justify-items-center'>
                    <FaUserTie className='text-9xl rounded-full ring  ring-offset-2 ring-offset-violet-300 p-1'/>
                </div>
                <div className=' flex flex-col gap-3'>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} required type="text" className='px-3 text-gray-500 w-full py-4 rounded-lg outline-none' placeholder='@username or email' autoComplete='off'/>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} required type="password" className='px-3 text-gray-500 w-full py-4 rounded-lg outline-none' placeholder='password' autoComplete='off'/>
                    {message&& <p className='text-yellow-500 font-bold text-2xl'>{message}</p>}
                    <button  type='submit' onClick={handleSubmit} className='py-3 bg-neutral-800 text-gray-200 rounded-lg'>Login</button>
                </div>
                <div className='flex py-5 gap-5 justify-between'>
                    <Link to='/forget-password'>
                        Forget <span className='text-red-500 underline italic'>Password</span>?
                    </Link>
                    <Link to='/register'>
                        Doesn't have an <span className='text-blue-500 underline italic'>account</span>?
                    </Link>
                </div>
            </div>

        </section>
        <Footer/>
    </>

  )
}

export default Login