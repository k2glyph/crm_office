import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Partials/Input/Input'
import RegisterImage from '../Assets/img/RegisterImage.png'
import LoginRegitser from '../Components/Partials/Button/LoginRegitser'

function Register() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='md:relative md:w-2/5 '>
            <div className='flex flex-col py-10 md:h-screen shadow-lg border md:fixed'>
                <h1 className='font-bold text-xl text-center pb-10 md:pb-20'>
                    Customer Relationship Management
                </h1>
                <img src={RegisterImage} className='m-auto'/>
                <h1 className='font-bold text-gray-500 text-center'>Powered By <span className='text-cyan-500'>POWER<span className='text-black'>KERTO</span></span></h1>
            </div>
        </div>
        <div className='md:w-3/5 md:h-screen'>
            <div className='p-10 md:px-20'>
                <div className='pb-5'>
                    <h1 className='font-bold text-xl md:text-2xl pb-1'>Create New Account</h1>
                    <h4 className='font-bold text-gray-500 text-sm'>Already Have an Account? <Link to='/' className='text-blue-600'>Sign in.</Link></h4>
                </div>
                <div className='py-10'>
                    <Input height={'pb-7'} type={'text'} title={'Full Name'} icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>} placeholder={'Full Name'}/>
                    <Input height={'pb-7'} type={'text'} title={'Email'} icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>} placeholder={'Email'}/>
                    <Input height={'pb-7'} type={'text'} title={'Phone'} icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>} placeholder={'Phone'}/>
                    <Input height={'pb-7'} type={'text'} title={'Username'} icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>} placeholder={'Username'}/>
                    <Input height={'pb-7'} type={'text'} title={'Password'} icon={<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'></path>} placeholder={'Password'}/>
                </div>
                <div>
                    <LoginRegitser to={'/'} title={'Register'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register