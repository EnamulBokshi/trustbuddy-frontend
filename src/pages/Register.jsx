import React, {useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Input from '../components/Forms/Input'
import { Link,Navigate,useNavigate } from 'react-router'
import {ToastContainer,toast,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useUser } from '../contexts/users/userContext';
function Register() {
    const navigate = useNavigate();
    const {user,setUser,setIsLoggedIn} = useUser();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordPass, setPasswordPass] = useState('')
    const [userData,setUserData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            setPasswordPass("Password doesn't match")
            setPassword('');
            setConfirmPassword('')
            return;
        }
        setUser((user)=> [...user,{name,username,email,phone,password}]);
        // localStorage.setItem('user',JSON.stringify(user.find(crUser => crUser.username == username)))
        console.log(user);
        setName('');
        setEmail('');
        setUsername('');
        setPhone('');
        setPassword('');
        setConfirmPassword('')
        toast('🦄 Registration Successful!', {
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
    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(user))
    },[user])

    return (
        <>
            <Nav />
            <section className='bg-gray-300 flex justify-center items-center p-5'>
                <div className='p-5 bg-gray-200 '>
                    <form onSubmit={handleSubmit} >
                        <h1 className='text-gray-800 pb-3 text-center'>Please provide all valild credintials</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3'>
                            <Input onChange={(e)=>setName(e.target.value)} value={name} name='fullname' title={'Full name'} pholder={'You are you?'} />
                            <Input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' name='email' title={'Email'} pholder={'love@rev.com'} />
                            <Input onChange={(e)=>setUsername(e.target.value)} value={username} name='username' title={'Username'} pholder={'@username'} />
                            <Input onChange={(e)=>setPhone(e.target.value)} value={phone} name='phone' title={'Phone number'} pholder={'+88 01xx-xxx-xxxx'} />
                            <Input onChange={(e)=>setPassword(e.target.value)} error= {passwordPass}value={password} name='password' title={'Password'} pholder={'password'} type='password' />
                            <Input onChange={(e)=>setConfirmPassword(e.target.value)} error= {passwordPass} value={confirmPassword} name='confirmPassword' title={'Confirm-Password'} pholder={'re-type password'} type='password' />
                            <div className='flex gap-3 pt-5'>
                                <Input type='checkbox' isReq/> <span>I agree with the <Link className='italic text-blue-600 underline'>terms and condition</Link> and <Link className='italic underline text-blue-600'>privecy policy</Link> </span>
                            </div>

                        </div>
                        {/* Submit button  */}
                        <div className='py-10 flex justify-center'>
                            <button type='submit' className='hover:bg-violet-800 text-white font-serif px-16 py-3 bg-violet-600 rounded-lg'>Register</button>
                        </div>
                        {/* End of submit button */}
                        <div className='flex justify-evenly'>
                            <p>
                                Already have an account? <Link to={'/login'} className='text-violet-600 italic underline font-bold'>Sign In</Link>
                            </p>
                            <p>

                            </p>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
            <ToastContainer/>
        </>
    )
}

export default Register