import React from 'react'

function DashboardCard({Value, Title}) {
  return (
    <div className='p-2'>
        <div className='block px-6 py-7 w-48 h-32 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{Value}</h5>
            <p className='font-normal text-gray-700 '>{Title}</p>
        </div>
    </div>
  )
}

export default DashboardCard