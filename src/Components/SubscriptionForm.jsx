import React, { useState } from 'react'
import Image from '../assets/google.webp'
import Button from './Button'
import Input from './Input'
const SubscriptionForm = () => {
  let [firstName , setFirstName] = useState('')
  let [lastName , setLasttName] = useState('')
  let [email , setEmail] = useState('')
  let [show ,setShow] = useState(false)
  function shows(){
    setShow(true)
  }
  return (
   <section className='main'>
    <div className='main-image'>
      <img src={Image} alt="" />
    </div>
    <form action="">
      <label htmlFor="firstName">First Name</label>
      <Input onchange={(e)=> setFirstName(e.target.value)} type='text' placeholder='First Name'/>

      <label htmlFor="lastName">Last Name</label>
      <Input onchange={(e)=> setLasttName(e.target.value)} type='text' placeholder='Last Name'/>

      <label htmlFor="email">Email</label>
      <Input onchange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email'/>
      <Button onClick={shows} className="button" type="submit" text="Subscribe!!" />
      {show && <>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
      </>}
    </form>
   </section>
  )
}

export default SubscriptionForm