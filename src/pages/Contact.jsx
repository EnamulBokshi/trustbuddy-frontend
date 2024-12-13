import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Input from '../components/Forms/Input'
function Contact() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('')
  const [message,setMessage] = useState('')
  const handleSubmit =()=>{
    console.log("Contact submitted")
  }
  return (
  <>
  <Nav active='contact'/>
    <section className=' p-5 flex justify-center items-center py-40 bg-contactus bg-no-repeat bg-cover bg-opacity-40'>
      <form onSubmit={handleSubmit}>
      <div className='p-4 bg-black/50 ring-1 rounded-lg grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3 '>
        <Input value={name}  css='text-white hover:text-green-600'  onChange={(e)=>setName(e.target.value)} pholder={"Full Name"} title={"Who are you?"} name={'name'}/>
        <Input value={email}  css='text-white hover:text-green-600'  onChange={(e)=>setEmail(e.target.value)} pholder={"someone@example.com"} title={"Email"} name={'email'} type='email'/>
        <Input value={purpose} css='text-white hover:text-green-600'  onChange={(e)=>setPurpose(e.target.value)}  pholder={"What's the purpose?"} title={'Reason?'} type="select" name={'category'} option={['Suggetions','Get a Quote','Get Mentorship','Others']} />
        <div></div>
        <Input value={message}  css='text-white hover:text-green-600' onChange={(e)=>setMessage(e.target.value)}  pholder={"Leave your message here..."} type="textarea" name={'category'} title={'whats on you mind?'}/>
        <div></div>
        <button className='bg-purple-700 py-3 text-white rounded-lg' type='submit'>Submit</button>
      </div>
      </form>
     
    </section>
  <Footer />
  </>
  )
}

export default Contact