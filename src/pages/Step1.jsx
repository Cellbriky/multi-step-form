import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { string } from 'zod/v4-mini'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const personalInfoSchema=z.object(
  {
    name:z.string().min(2, 'name must be at less 2 character'),
    email:z.string().email('This field is required'),
    phone_number:z.string().min(2, 'phone number is required')
  }
)

const Step1 = () => {
  const navigate = useNavigate()
  const { register,
    handleSubmit,
    formState:{errors},
  }=useForm({
    resolver:zodResolver(personalInfoSchema)
  })
  const submit=(data)=>{
    console.log(data)
  }
  return (
    <div class='relative bottom-13 h-full'>
      <div class=' mx-4 flex  flex-col justify-between h-full' >
        <form onSubmit={handleSubmit(submit)} class='bg-[var(--White)] h-full w-full border-0 rounded-xl px-6 py-8' >
          <h1 class='text-2xl font-bold text-[var(--primaryBlue950)] mb-2'>Personal Info</h1>
          <div class='block'>
            <p class='text-sm font-medium text-[var(--Grey500)]'>Please provide your name, email</p>
            <p class='text-sm font-medium text-[var(--Grey500)]'>address, and phone number.</p>
          </div>
          <div class='mt-4'>
            <label for='name' class='text-xs text-[var(--primaryBlue950)] font-medium'>Name</label>
            <input id='name' type='text' placeholder='e.g Stephen King'/>
          </div>
          <div class='mt-2'>
            <label class='text-xs text-[var(--primaryBlue950)] font-medium' for='email'>Email Address</label>
            <input id='email' type='text' required placeholder='e.g stephenking@gmail.com'/>
          </div>
          <div class='mt-2'>
            <label class='text-xs text-[var(--primaryBlue950)] font-medium' for='phone_no'>Phone Number</label>
            <input  id='phone_no' type='text' placeholder=' e.g +1 234 567 890'></input>
          </div>
        </form>
        <footer>
          <button onClick={() => navigate('/step2', { replace: true })}>Next(replace)</button> 
        </footer>
      </div>
    </div>
  )
}

export default Step1