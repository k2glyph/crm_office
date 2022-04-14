import React from 'react'
import Profile from '../Assets/img/Profile.jpg'
import ListChat from '../Components/Partials/ListChat/ListChat'
import Template from '../Components/Partials/Panel/Template'

function RoomChat() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/6 h-screen border-r shadow-md'>
            <div className='px-5 h-1/6 flex justify-between items-center border-b'>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64" placeholder="Search" />
                </div>
                <div className='flex flex-row'>
                    <Template />
                    <div className='px-2'>
                        <button className='border border-gray-400 hover:border-gray-600 p-2 rounded-full'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                    <div className='px-2'>
                        <button className='border border-gray-400 hover:border-gray-600 p-2 rounded-full'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto h-5/6 px-5 py-5'>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>
                <ListChat ContactName={'Muh Faizal'} PhoneNumber={'+6281245527645'} Times={'2 Hours'}/>

            </div>
        </div>
        <div className='hidden md:flex flex-col md:w-4/6 '>
            <div className='px-5 h-1/6 border-b flex flex-row items-center'>
                <img src={Profile} className='w-10 h-10 rounded-full'/>
                <div className='ml-3'>
                    <h1 className='font-bold'>Muh. Faizal</h1>
                    <div className='flex items-center'>
                        <div className='bg-green-400 w-2 h-2 rounded-full' />
                        <h1 className='font-semibold ml-1'>Active</h1>
                    </div>
                </div>
            </div>
            <div className='border-b h-3/4'>

            </div>
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default RoomChat