import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Input from '../components/Forms/Input'
function Contact() {
  return (
  <>
  <Nav active='contact'/>
    <section className='bg-gray-400 p-5 flex justify-center items-center'>
      <div className='p-4 bg-gray-200 grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3 '>
        <Input pholder={"Full Name"} title={"Who are you?"} name={'name'}/>
        <Input pholder={"someone@example.com"} title={"Email"} name={'email'} type='email'/>
        <Input pholder={"What's the purpose?"} type="select" name={'category'} option={['Suggetions','Get a Quote','Others']} />
      </div>
    </section>
  <Footer />
  </>
  )
}

export default Contact