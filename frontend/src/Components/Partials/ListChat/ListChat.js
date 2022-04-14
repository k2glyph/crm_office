import React from 'react'
import Profile from '../../../Assets/img/Profile.jpg'

function ListChat({ContactName, PhoneNumber, Times}) {
    return (
        <button className='h-1/6 w-full flex flex-col justify-center items-center md:mb-5' typeof='submit'>
            <div className='h-4/5 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={Profile} className='w-16 h-16 rounded-full shadow-sm' />
                    <div className='px-5'>
                        <h1 className='font-bold text-left'>{ContactName}</h1>
                        <h1 className='font-semibold text-gray-600'>{PhoneNumber}</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-gray-600'>{Times}</h1>
                    <div className='flex justify-end'>
                        <div className='bg-cyan-400 w-5 h-5 rounded-full'>
                            <h1 className='text-white font-semibold text-sm text-center'>00</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b w-2/5 mt-5' />
        </button>
    )
}

export default ListChat