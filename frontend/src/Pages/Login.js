import React from 'react'
import Profile from '../Assets/img/Profile.jpg'

function Login() {
  return (
    <div className='flex flex-col-reverse md:flex-row'>
        <div className='p-10 md:w-2/5 flex flex-row justify-center items-center'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl text-center pb-10'>
                    Customer Relationship Management
                </h1>
                <div>
                    <h1 className='font-bold text-2xl'>Hello,</h1>
                    <h1 className='text-red-600 font-bold text-2xl'>Welcome Back!</h1>
                    <div className='py-10 flex flex-col'>
                        <div className='pb-5'>
                            <label htmlFor='username-adress-icon' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Username</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <svg className='w-4 h-4 ' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path></svg>
                                </div>
                                <input type='text' id='email-adress-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Username' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='Password-adress-icon' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Password</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <svg class='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'></path></svg>
                                </div>
                                <input type='password' id='email-adress-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Password' />
                            </div>
                        </div>
                        <h1 className='self-end p-2 font-semibold text-gray-500 text-sm'>Forget Password?</h1>
                        <div className='mt-10'>
                            <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-full'>Login</button>
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