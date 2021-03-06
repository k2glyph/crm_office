import React, { Component, useState } from 'react'
import SlidingPane from "react-sliding-pane"
import Profile from '../Assets/img/Profile.jpg'
import ListChat from '../Components/Partials/Chat/ListChat'
import Broadcast from '../Components/Partials/Panel/Broadcast'
import ContactList from '../Components/Partials/Panel/ContactList'
import Template from '../Components/Partials/Panel/Template'

function RoomChat() {

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

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
                        <ContactList />
                        <Broadcast />
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
            <div className='hidden h-screen md:flex flex-col w-4/6 '>
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
                <div className='overflow-y-auto border-b h-3/4 p-5'>
                    <div className='flex flex-col w-auto mt-2'>
                        <div className='flex flex-row items-center w-auto'> 
                            <img src={Profile} className='w-12 h-12 rounded-lg' />
                            <h1 className='font-bold text-md px-2'>Muhammad Faizal</h1>
                            <h3 className='font-semibold text-sm text-gray-600'>5 mins</h3>
                        </div>
                        <div className='h-auto w-1/2 bg-gray-200 rounded-lg p-3 mt-2'> 
                            <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</label>
                        </div>
                    </div>
                    <div className='flex flex-col items-end w-auto mt-2'>
                        <div className='flex flex-row items-center w-auto'> 
                            <h3 className='font-semibold text-sm text-gray-600'>5 mins</h3>
                            <h1 className='font-bold text-md px-2'>You</h1>
                            <img src={Profile} className='w-12 h-12 rounded-lg' />
                        </div>
                        <div className='h-auto w-1/2 bg-green-400 rounded-lg p-3 mt-2'> 
                            <label className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</label>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto mt-2'>
                        <div className='flex flex-row items-center w-auto'> 
                            <img src={Profile} className='w-12 h-12 rounded-lg' />
                            <h1 className='font-bold text-md px-2'>Muhammad Faizal</h1>
                            <h3 className='font-semibold text-sm text-gray-600'>5 mins</h3>
                        </div>
                        <div className='h-auto w-1/2 bg-gray-200 rounded-lg p-3 mt-2'> 
                            <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</label>
                        </div>
                    </div>
                    <div className='flex flex-col items-end w-auto mt-2'>
                        <div className='flex flex-row items-center w-auto'> 
                            <h3 className='font-semibold text-sm text-gray-600'>5 mins</h3>
                            <h1 className='font-bold text-md px-2'>You</h1>
                            <img src={Profile} className='w-12 h-12 rounded-lg' />
                        </div>
                        <div className='h-auto w-1/2 bg-green-400 rounded-lg p-3 mt-2'> 
                            <label className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</label>
                        </div>
                    </div>
                </div>
                <div className='h-12 p-5'>
                    <div className='h-4/5 mt-1.5 flex flex-row justify-between items-center'>
                        <div className='flex flex-row'>
                            <div className='group border border-gray-600 hover:border-blue-600 rounded-full w-10 h-10 flex justify-center items-center'>
                                <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                            </div>
                            <div className='group border border-gray-600 hover:border-blue-600 rounded-full w-10 h-10 flex justify-center items-center ml-2'>
                                <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </div>
                        </div>
                        <div className='w-full pl-5 pr-4'>
                            <input type='text' className='h-10 w-full rounded-full shadow-md' placeholder='Send Message...' />
                        </div>
                        <div>
                            <div className='group border border-gray-600 hover:border-blue-600 rounded-full w-10 h-10 flex justify-center items-center ml-2'>
                                <svg className="w-6 h-6 text-gray-900 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomChat