import React, { useContext, useState } from 'react'
import UserContext from '../contexts/users/userContext';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Input from '../components/Forms/Input'
import { Link } from 'react-router'
function Register() {
    const { user, setUser } = useContext(UserContext);
    const [name,setName] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordPass, setPasswordPass] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Getting for submit")
    }
    return (
        <>
            <Nav />
            <section className='bg-gray-300 flex justify-center items-center p-5'>
                <div className='p-5 bg-gray-200 '>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-gray-800 pb-3 text-center'>Please provide all valild credintials</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3'>
                            <Input title={'Full name'} pholder={'You are you?'} onChange = {(e)=>setName(e.target.value)}/>
                            <Input title={'Email'} pholder={'love@rev.com'} />
                            <Input title={'Username'} pholder={'@username'} />
                            <Input title={'Phone number'} pholder={'+88 01xx-xxx-xxxx'} />
                            <Input title={'Password'} pholder={'password'} type='password' />
                            <Input title={'Confirm-Password'} pholder={'re-type password'} type='password' />
                            <div className='flex gap-3 pt-5'>
                                <Input type='checkbox' /> <span>I agree with the <Link className='italic text-blue-600 underline'>terms and condition</Link> and <Link className='italic underline text-blue-600'>privecy policy</Link> </span>
                            </div>

                        </div>
                        {/* Submit button  */}
                        <div className='py-10 flex justify-center'>
                            <button type='submit' className='hover:bg-violet-800 text-white font-serif px-16 py-3 bg-violet-600 rounded-lg'>Register</button>
                        </div>
                        {/* End of submit button */}
                        <div className='flex justify-evenly'>
                            <p>
                                Already have an account? <Link to={'/login'} className='text-violet-600 italic underline font-bold'>Sign Up</Link>
                            </p>
                            <p>

                            </p>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register