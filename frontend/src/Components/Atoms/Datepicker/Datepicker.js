import React from 'react'

function Datepicker() {
  return (
    <div date-rangepicker='true' className='flex items-center flex-wrap'>
        <div>
            <input name='start' type='date' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Select date start' />
        </div>
        <span className='mx-4 text-gray-500'>to</span>
        <div>
            <input name='end' type='date' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Select date end' />
        </div>
    </div>
  )
}

export default Datepicker