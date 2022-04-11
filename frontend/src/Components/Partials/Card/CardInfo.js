import React from 'react'

function CardInfo({Value, Title}) {
  return (
    <div href='#' className='block p-6 w-48 m-1 md:w-60 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{Value}</h5>
        <p className='font-normal text-gray-700'>{Title}</p>
    </div>
  )
}

export default CardInfo