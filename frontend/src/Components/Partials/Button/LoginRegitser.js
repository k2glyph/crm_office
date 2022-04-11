import React from 'react'
import { Link } from 'react-router-dom'

function LoginRegitser({to, title}) {
  return (
    <div>
        <Link to={to} type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-full'>{title}</Link>
    </div>
  )
}

export default LoginRegitser