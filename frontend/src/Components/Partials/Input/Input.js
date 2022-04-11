import React from 'react'

function Input({placeholder, title, icon, height, type}) {
  return (
    <div className={height}>
        <label htmlFor='Password-adress-icon' className='block mb-2 text-sm font-medium text-gray-900'>{title}</label>
        <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>{icon}</svg>
            </div>
            <input type={type} id='email-adress-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5' placeholder={placeholder} />
        </div>
    </div>
  )
}

export default Input