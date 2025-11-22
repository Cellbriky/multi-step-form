import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './root_layout/RootLayout'
import Step3 from './pages/Step3'
import Step2 from './pages/Step2'
import Step1 from './pages/Step1'
import Step4 from './pages/Step4'
import vite from '/vite.svg'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<Step1/>} />
        <Route path='step2' element={<Step2/>} />
        <Route path='step3' element={<Step3/>} />
        <Route path='step4' element={<Step4/>}/>
      </Route>
    )
  )
  
  return (
    <>
      <div>
        <RouterProvider router={router}/>
        <div style={{backgroundImage: `url(/vite.svg)`}}>
          <h1>ererfgsrr</h1>
        </div>
      </div>
    </>
  )
}

export default App
