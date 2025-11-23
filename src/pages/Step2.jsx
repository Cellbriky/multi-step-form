import React from 'react'
import iconArcade from '../assets/icon-arcade.svg'
import iconAdvanced from '../assets/icon-advanced.svg'
import iconPro from '../assets/icon-pro.svg'
import styles from '../style_pages/step2.module.css'
import { useState, useEffect } from 'react'
const Step2 = () => {
  const [isMonthly, setMonthly]=useState(false)
  const [isYearly, setYearly]=useState(false)
  const [isChecked, setChecked]=useState(true)
  const handleToggle=(event)=>{
    console.log(event.target.value)

      setChecked(!isChecked)
    
  }


  return (
    <div class='relative px-4 bottom-13 h-full'>
      <div class='flex  flex-col justify-between h-full bg-[var(--White)] h-full w-full border-0 rounded-xl px-6 py-8'>
        <h1 class='text-2xl font-bold text-[var(--primaryBlue950)] mb-2'> Select your plan{isChecked}</h1>
        
        <div class='my-4'>
          <p class='text-sm font-medium text-[var(--Grey500)]'>you have the option of monthly or</p>
          <p class='text-sm font-medium text-[var(--Grey500)]'> yearly billing</p>
        </div>
        <form class='relative'>
          <div>
            <div class='mb-1'>
              <label for='arcade' class='z -1 p-4   w-full absolute '>
                <div class='flex'>
                  <div class='flex items-start' >
                    <img class='h-8 w-8' src={iconArcade}/>
                  </div>
                  <div class='ml-3'>
                    <p class='text-sm font-bold text-[var(--primaryBlue950)]'>Arcade</p>
                    <p class='text-xs font-medium text-[var(--Grey500)]'>$90/yr</p>
                    <p class='text-xs font-bold text-[var(--primaryBlue950)]'>2 months free</p>
                  </div>
                </div>
              </label>
              <input id='arcade'  type='radio' class='relative'  className={styles.yearly_radio}  /> 
            </div>
            {/* Second Box */}
            <div class='mb-1'>
              <label for='advanced' class='z -1 p-4   w-full absolute '>
                <div class='flex'>
                  <div class='flex items-start' >
                    <img class='h-8 w-8' src={iconAdvanced}/>
                  </div>
                  <div class='ml-3'>
                    <p class='text-sm font-bold text-[var(--primaryBlue950)]'>Advanced</p>
                    <p class='text-xs font-medium text-[var(--Grey500)]'>$120/yr</p>
                    <p class='text-xs font-bold text-[var(--primaryBlue950)]'>2 months free</p>
                  </div>
                </div>
              </label>
              <input id='advanced'  type='radio' class='relative' className={styles.yearly_radio} /> 
            </div>
            {/* Third Box */}
            <div class='h-fit'>
              <label for='pro' class='z -1 p-4   w-full absolute '>
                <div class='flex'>
                  <div class='flex items-start' >
                    <img class='h-8 w-8' src={iconPro}/>
                  </div>
                  <div class='ml-3'>
                    <p class='text-sm font-bold text-[var(--primaryBlue950)]'>Pro</p>
                    <p class='text-xs font-medium text-[var(--Grey500)]'>$150/yr</p>
                    <p class='text-xs font-bold text-[var(--primaryBlue950)]'>2 months free</p>
                  </div>
                </div>
              </label>
              <input id='pro'  type='radio' class='relative' className={styles.yearly_radio}/> 
            </div>
          </div>
          <div class=' flex items-center justify-center py-4 bg-[var(--primaryBlue200)]' >
            <div class='flex items-center justify-center'>
              <label for='monthly' class='text-sm font-medium'>Monthly</label>
            </div>
            <div class='flex items-center justify-center bg-[var(--primaryBlue950)]  border-1 rounded-xl py-0.5 mx-4'>
              <input id='monthly' type='radio' value='monthly'  className={styles.toggle}  defaultChecked={isChecked} onChange={handleToggle}/>
          
              <input id='yearly' type='radio' value='yearly' className={styles.toggle}  onChange={handleToggle}/>
            </div>
            <div class='flex items-center justify-center '>
              <label for='yearly' class='text-sm font-medium'>Yearly</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step2