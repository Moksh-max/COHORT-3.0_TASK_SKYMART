import React from 'react'
import Welcome from '../components/Welcome'
import SignUp from '../components/SignUp'

const WelcomeSignUp = () => {
  return (
    <div className='flex' >
      <Welcome/>
      <SignUp/>
    </div>
  )
}

export default WelcomeSignUp
