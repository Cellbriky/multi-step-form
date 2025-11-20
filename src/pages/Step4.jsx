import React from 'react'
import { useNavigate } from 'react-router-dom'
const Step4 = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div>Setp 4</div>
        <button onClick={() => navigate('/step3', { replace: true })}>Go to About (replace)</button> 
    </div>
  )
}

export default Step4