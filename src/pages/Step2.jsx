import React from 'react'
import iconArcade from '../assets/icon-arcade.svg'
const Step2 = () => {
  return (
    <div class='relative px-4 bottom-13 h-full'>
      <div class='flex  flex-col justify-between h-full bg-[var(--White)] h-full w-full border-0 rounded-xl px-6 py-8'>
        <h1 class='text-2xl font-bold text-[var(--primaryBlue950)] mb-2'> Select your plan</h1>
        <div class='my-4'>
          <p class='text-sm font-medium text-[var(--Grey500)]'>you have the option of monthly or</p>
          <p class='text-sm font-medium text-[var(--Grey500)]'> yearly billing</p>
        </div>
        <form>
          <div class='p-4 border-1 rounded-sm outline-0 border-[var(--Grey500)] focus:border-[var(--primary-Purple600)] focus:border-10 focus:bg-red-500'>
            <label for='arcade' class=' bg-red-500'>
              <div class='flex'>
                <div class='flex items-start' >
                  <img class='h-8 w-8' src={iconArcade}/>
                </div>
                <div class='ml-3'>
                  <p class='text-sm font-bold text-[var(--primaryBlue950)]'>Arcade</p>
                  <p class='text-sm font-medium text-[var(--Grey500)]'>$90/yr</p>
                  <p class='text-xs font-bold text-[var(--primaryBlue950)]'>2 months free</p>
                </div>
              </div>
            </label>
          </div>
          <input id='arcade' type='radio' /> 
          <input id='advanced' type='radio' checked class='relative'/> 
          <div class=' relative bg-yellow-500 p-4'>
              <label for='advanced' class=' relative  bg-red-500'>
              <div class='flex'>
                <div class='flex items-start' >
                  <img class='h-8 w-8' src={iconArcade}/>
                </div>
                <div class='ml-3'>
                  <p class='text-sm font-bold text-[var(--primaryBlue950)]'>Arcade</p>
                  <p class='text-sm font-medium text-[var(--Grey500)]'>$90/yr</p>
                  <p class='text-xs font-bold text-[var(--primaryBlue950)]'>2 months free</p>
                </div>
              </div>
            </label> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step2