import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../Assets/img/Profile.jpg';

function CardWhatsapp({names, phone}) {
  return (
    <div className='w-1/1 m-2 w-96 h-72 sm:w-72 flex justify-center items-center bg-white rounded-2xl border-gray-200 shadow-md'>
        <div className='flex flex-col items-center'>
            <img className='mb-3 w-24 h-24 rounded-full shadow-lg' src={Profile} alt='Bonnie image'/>
            <h5 className='mb-1 text-xl font-medium text-gray-900'>{names}</h5>
            <span className='text-sm text-gray-500'>{phone}</span>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
                <Link to='/crm-chat' target='_blank' className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Out</Link>
                <Link to='/crm-chat' target='_blank' className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200'>Message</Link>
            </div>
        </div>
    </div>
  )
}

export default CardWhatsapp