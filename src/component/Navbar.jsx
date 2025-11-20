import React from 'react'
import { NavLink , replace } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div class='bg-[url(assets\bg-sidebar-mobile.svg)] bg-cover h-39 w-full'>
      <div class='bg-[url(assets\bg-sidebar-mobile.svg)] bg-cover h-39 w-full'>
        <ul class='flex justify-center  items-center pt-6 '>
          <NavLink to='/' class='px-3 py-1.5 ' ><li class='text-sm font-medium border-1 rounded-full px-3 py-1.5 text-[var(--neutralBlue100)] mr-4'
             >1</li></NavLink>
          <NavLink to='/step2'><li className='click' class='text-sm font-medium px-3 py-1.5 border-1 rounded-full text-[var(--neutralBlue100)] mr-4' >2</li></NavLink>
          <NavLink to='/step3'><li className='click' class='text-sm font-medium px-3 py-1.5 border-1 rounded-full text-[var(--neutralBlue100)] mr-4' >3</li></NavLink>
          <NavLink to='/step4'><li className='click' class='text-sm font-medium px-3 py-1.5 border-1 rounded-full text-[var(--neutralBlue100)]' >4</li></NavLink>
        </ul>
        <button onClick={() => navigate('/step4', { replace: true })}>Go to About (replace)</button> 
      </div>
    </div>
  )
}

export default Navbar