import React from 'react'

function Table({HeadTitle, SubTitle}) {
  return (
    <div className='shadow-md sm:rounded-lg border border-1'>
        <div className='p-7 flex flex-row justify-between'>
            <div className='mt-1'>
                <h1 className='font-bold text-xl antialiased'>{HeadTitle}</h1>
                <span className='text-gray-400 font-semibold'>{SubTitle}</span>
            </div>
            <button type='button' className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center '>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>
                Export
            </button>
        </div>
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
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b hover:bg-gray-50'>
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
                </tr>
                <tr className='bg-white border-b hover:bg-gray-50 '>
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
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table