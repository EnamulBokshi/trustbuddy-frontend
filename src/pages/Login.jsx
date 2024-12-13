import React, {useEffect, useState } from 'react'
import { Navigate,Link, useNavigate} from 'react-router'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaUserTie } from "react-icons/fa";
import {ToastContainer,toast,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useUser } from '../contexts/users/userContext';
function Login() {
    const {user,setUser,setIsLoggedIn,setC_user} = useUser();
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('')
    const users = JSON.parse(localStorage.getItem("users"));
    const [currentUser,setCurrentUser] = useState([]);
    console.log("users from local storage: ",users)
    const navigate = useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault();
        setErrorMsg('')
       const currentUser = users.find((u) => u.username == username && u.password == password? u:null)
       if(currentUser){
            setC_user(currentUser);
            setCurrentUser(currentUser);
            localStorage.setItem('LoggedUser',JSON.stringify(currentUser));
            localStorage.setItem('IsLoggedIn','true');
            setIsLoggedIn(true); 
            toast('🦄 Wohoo! Logged in Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                }); 
                navigate('/')
        }
        else {
            setErrorMsg("Wron username or password!")
        }

    }
    useEffect(()=>{
        localStorage.setItem("currenUser",JSON.stringify(currentUser));
    },[user])
  return (
    <>
        <Nav/>
        <section className='py-20 bg-gray-300 flex justify-center items-center'>
            <div className='p-5 bg-gray-500 rounded-lg'>
                <div className='py-10 grid justify-items-center'>
                    <FaUserTie className='text-9xl rounded-full ring  ring-offset-2 ring-offset-violet-300 p-1'/>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className=' flex flex-col gap-3'>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} required type="text" className='px-3 text-gray-500 w-full py-4 rounded-lg outline-none' placeholder='@username or email' autoComplete='off'/>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} required type="password" className='px-3 text-gray-500 w-full py-4 rounded-lg outline-none' placeholder='password' autoComplete='off'/>
                    {errorMsg&& <p className='text-red-500 bg-gray-400 p-1 rounded-lg'>{errorMsg}</p>}
                    <button type='submit' className='py-3 bg-neutral-800 text-gray-200 rounded-lg'>Login</button>
                    </div>
                </form>
                    
              
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
        <ToastContainer/>
    </>

  )
}

export default Login