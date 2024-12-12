import React, {useEffect, useId, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Input from '../components/Forms/Input'
import { Link,Navigate,useNavigate } from 'react-router'
import {ToastContainer,toast,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useUser } from '../contexts/users/userContext';
function Register() {
    const UID = useId();
    const navigate = useNavigate();
    const dummyUsername = ['admin','user123'];
    const {user,setUser,setIsLoggedIn,takenUsername,setTakenUsername} = useUser();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordPass, setPasswordPass] = useState('');
    const [userData,setUserData] = useState([]);
    const [age,setAge] = useState(null);
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [image,setImage] = useState('')
    // For Error Message
    const [errorMessage, setErrorMessage] = useState('')
    const [usernameErrorMessage,setUsernameErrorMessage] = useState('')
    // Number Validation start

    //Checking is it bangladeshi number or not
    const isBdNumber = (number)=>{
        const bdPhoneRegex = /^(?:\+?88)?01[2-9]\d{8}$/;;
        return bdPhoneRegex.test(number)
    }
    // Taking only numbers
    const handleNumberInput = (e)=>{
        const inputValue = e.target.value;
        if(!/^\d*$/.test(inputValue))
        {
            setErrorMessage('Only numbers are allowed')
        }
        else{
            setErrorMessage('');
            setPhone(inputValue);
        }

    }

    // Number Validation Ends


    // Username Validation starts----
    // Username validation
    const isValidUsername = (username)=>{
        const userNameRegex = /^[a-zA-Z0-9]([a-zA-Z0-9_-]{1,13}[a-zA-Z0-9])?$/
        return userNameRegex.test(username);
    }
    // check avilability
    const handleUsername = (e)=>{
        const inputValue = e.target.value;
        if(!isValidUsername(inputValue)){
            setUsernameErrorMessage('Only (a-z),(A-Z),(0-9) and (-,_) are allowed and length > 3');
        }
        else{
            setUsernameErrorMessage('')
        }
        setUsername(inputValue);
        
    }
    // Username Validation ends-----
    const handleSubmit = (e) => {
        e.preventDefault();
        // checking its a valid number or not
        if(!isBdNumber(phone)){
            setErrorMessage("Please enter a valid Bangladeshi number!!");
            return;
        }
        // checking username availability
        if(takenUsername.includes(username) || usernameErrorMessage.length>0){
            setUsernameErrorMessage('Username already taken! username should be  unique')
            return;
        }

        // Cheking is password and confirm password are matched
        if (password !== confirmPassword){
            setPasswordPass("Password doesn't matched")
            setPassword('');
            setConfirmPassword('')
            return;
        }

        setUser((user)=> [...user,{id:UID,name,username,email,phone,password,age,gender,address,image}]);
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
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5'>
                            <Input onChange={(e)=>setName(e.target.value)} value={name} name='fullname' title={'Full name'} pholder={'You are you?'}  isReq/>
                            <Input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' name='email' title={'Email'} pholder={'love@rev.com'}  isReq/>
                            <Input onChange={(e)=>handleUsername(e)} value={username} type ='text' name='username' title={'Username'} pholder={'@username'} error={usernameErrorMessage} isReq/>
                            <Input onChange={(e)=>handleNumberInput(e)} value={phone} name='phone' title={'Phone number'} pholder={'+88 01xx-xxx-xxxx'} error={errorMessage} isReq/>
                            <Input onChange={(e)=>setPassword(e.target.value)} error= {passwordPass}value={password} name='password' title={'Password'} pholder={'password'} type='password'  isReq/>
                            <Input onChange={(e)=>setConfirmPassword(e.target.value)} error= {passwordPass} value={confirmPassword} name='confirmPassword' title={'Confirm-Password'} pholder={'re-type password'} type='password'  isReq/>
                            <Input value={age} onChange={(e)=>setAge(e.target.value)} title={"How old are you?"} type='number' pholder={'How old are you?'} isReq/>
                            <Input value={address} onChange={(e)=>setAddress(e.target.value)} title={"Where do you live?"}  pholder={'Enter your current address'} isReq/>
                            <Input type='select' value={gender} onChange={(e)=> setGender(e.target.value)} title={'Your gender?'} option={['Male','Female','Others']} isReq/>
                            <Input type='text' title={'Share your photo'} pholder={'Please enter your profile photo link'} value={image} onChange={e=>setImage(e.target.value)} />
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