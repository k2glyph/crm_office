import React from 'react'
import { Link } from 'react-router-dom'
import LoginRegitser from '../Components/Partials/Button/LoginRegitser'
import Input from '../Components/Partials/Input/Input'

function Login() {
  return (
    <div className='flex flex-col-reverse md:flex-row'>
        <div className='p-10 md:w-2/5 flex flex-row justify-center items-center'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl text-center pb-10 md:pb-20'>
                    Customer Relationship Management
                </h1>
                <div>
                    <h1 className='font-bold text-2xl'>Hello,</h1>
                    <h1 className='text-red-600 font-bold text-2xl'>Welcome Back!</h1>
                    <div className='py-10 flex flex-col'>
                        <Input height={'mb-5'} title={'Username'} icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>} placeholder={'Username'} type={'email'}/>
                        <Input title={'Username'} icon={<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'></path>} placeholder={'Username'} type={'password'}/>
                        
                        <Link to='/' className='self-end p-2 font-semibold text-gray-500 text-sm hover:text-blue-600'>Forget Password?</Link>
                        <h1 className='self-center p-2 mt-5 font-semibold text-gray-500 text-sm'>Don’t have an account? <Link to='/create-account' className='text-blue-600'> Sign Up</Link></h1>
                        <div>
                            <LoginRegitser to={'/dashboard'} title={'Login'} />
                        </div> 
                    </div>
                </div>
                <h1 className='font-bold text-gray-500 text-center'>Powered By <span className='text-cyan-500'>POWER<span className='text-black'>KERTO</span></span></h1>
            </div>
        </div>
        <div className='bg-login-img h-96 bg-cover md:w-3/5 md:h-screen '>
        </div>
    </div>
  )
}

export default Login