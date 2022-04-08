import React from 'react'
import Profile from '../../img/profile.jpg'


const Aside = () => {
  return (
    <div className='w-48' aria-label='Sidebar'>
        <div className='py-10 px-3 bg-gray-100 rounded-r-lg w-48 h-full fixed'>
            <div className='flex items-center pl-2.5 mb-5'>
                <img src={Profile} className='h-6 mr-3 sm:h-7 rounded'/>
                <span className='self-center text-xl font-semibold whitespace-nowrap '>CRM</span>
            </div>
            <ul className='pt-4 mt-4 space-y-2 border-t border-gray-200 '>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path><path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path></svg>
                    <span className='ml-3'>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path><path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Inbox</span>
                    <span className='inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full '>3</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Template</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Broadcast</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z' clipRule='evenodd'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Reporting</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Cs</span>
                    </a>
                </li>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>List</span>
                    </a>
                </li>
            </ul>
            <ul className='pt-4 mt-4 space-y-2 border-t border-gray-200'>
                <li>
                    <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'>
                    <svg className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900' fillRule='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z' clipRule='evenodd'></path></svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Aside