import React from 'react'
import Modal from '../Modal/Modal'

function LeadTable({HeadTitle, SubTitle}) {
  return (
    <div className='shadow-md sm:rounded-lg border border-1'>
        <div className='p-7 flex flex-row justify-between items-center bg-white'>
            <div className='mt-1'>
                <h1 className='font-bold text-xl antialiased'>{HeadTitle}</h1>
                <span className='text-gray-400 font-semibold'>{SubTitle}</span>
            </div>
            <div className='flex flex-row'>
                <Modal NameButtonModal={'Token'} />
                <a href='#' className='ml-2 flex flex-row text-white hover:text-blue-300 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center py-2 px-3 items-center'>
                    <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>
                    Export
                </a>
            </div>

        </div>
        <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 bg-gray-50'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-36'>
                            Advertise
                        </th>
                        <th scope='col' className='px-6 py-3 w-52'>
                            Operator
                        </th>
                        <th scope='col' className='px-6 py-3 w-32'>
                            Customer
                        </th>
                        <th scope='col' className='px-6 py-3 w-32'>
                            Whatsapp
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Product
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Date Time
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Status
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td className='px-6 py-4'>
                            Muh Faizal
                        </td>
                        <td className='px-6 py-4'>
                            Customer Service 1
                        </td>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            Client 1
                        </td>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            +6281245527645
                        </td>
                        <td className='px-6 py-4'>
                            Etawaku
                        </td>
                        <td className='px-6 py-4'>
                            31-03-22 22:28:33
                        </td>
                        <td className='px-6 py-4'>
                            <div className='px-2 py-1 bg-red-600 rounded-full flex items-center justify-center'>
                                <h1 className='text-white font-semibold'>Failed</h1>
                            </div>
                        </td>
                        <td className='px-6 py-4'>
                            <a href='#' className='inline-block hover:text-cyan-700 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg text-sm text-center px-2 py-1'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>
                            </a>
                        </td>
                    </tr>
                    <tr className='bg-white border-b hover:bg-gray-50'>
                        <td className='px-6 py-4'>
                            Muh Faizal
                        </td>
                        <td className='px-6 py-4'>
                            Customer Service 2
                        </td>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            Client 2
                        </td>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            +6281245527646
                        </td>
                        <td className='px-6 py-4'>
                            Gizidat
                        </td>
                        <td className='px-6 py-4'>
                            31-03-22 22:28:33
                        </td>
                        <td className='px-6 py-4'>
                            <div className='px-2 py-1 bg-green-400 rounded-full flex items-center justify-center'>
                                <h1 className='text-white font-semibold'>Closing</h1>
                            </div>
                        </td>
                        <td className='px-6 py-4'>
                            <a href='#' className='inline-block hover:text-cyan-700 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg text-sm text-center px-2 py-1'>
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LeadTable