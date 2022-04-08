import React from 'react'

function Title({HeadTitle, SubTitle}) {
  return (
    <div>
        <h1 className='font-bold text-2xl antialiased'>{HeadTitle}</h1>
        <span className='text-gray-400 font-semibold'>{SubTitle}</span>
    </div>
  )
}

export default Title