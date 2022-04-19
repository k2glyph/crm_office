import React, {useState} from 'react'
import Input from '../Input/Input';

function Template() {

    const [showTemplate, setShowTemplate] = useState(false);
    const [showNew, setShowNew] = useState(false);

    return (
        <>
            <div className='px-2'>
                <button className='border border-gray-400 hover:border-gray-600 p-2 rounded-full' type="button" onClick={() => setShowTemplate(true)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                </button>
            </div>
            {showTemplate ? (
                <div>
                    <div className="fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative h-screen w-2/6 border">
                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <button className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowTemplate(false)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                    </button>
                                    <div className='flex flex-row items-center'>
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                                        <h3 className="text-xl font-semibold ml-2 text-green-400">
                                            Template
                                        </h3>
                                    </div>
                                    <div/>
                                </div>
                                {/*body*/}
                                <div className='px-5 h-1/6 flex justify-between items-center'>
                                    <div className="relative mt-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64" placeholder="Search" />
                                    </div>
                                    <div className='flex flex-row'>
                                        <button className=' bg-green-300 py-2 px-3 rounded-xl text-white font-semibold' onClick={() => setShowNew(true)}>New Template</button>
                                        {showNew ? (
                                            <div>
                                                <div className="fixed inset-0 z-50 outline-none focus:outline-none">
                                                    <div className="relative h-screen w-2/6 border">
                                                        {/*content*/}
                                                        <div className="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                                                            {/*header*/}
                                                            <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <button className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowNew(false)}>
                                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                                </button>
                                                                <div className='flex flex-row items-center'>
                                                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                                                                    <h3 className="text-xl font-semibold ml-2 text-green-400">
                                                                        Add Template
                                                                    </h3>
                                                                </div>
                                                                <div/>
                                                            </div>
                                                            {/*body*/}
                                                            <div className='px-5 h-5/6 flex flex-col justify-between'>
                                                                <div>
                                                                    <Input height={'mt-10'} title={'Template Name'} placeholder={'Template Name'} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>} />
                                                                    <div className='mt-10'>
                                                                    <label htmlFor='Password-adress-icon' className='block mb-2 text-sm font-medium text-gray-900'>Text Message</label>
                                                                        <textarea className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Enter your text message here'></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className='mt-10'>
                                                                    <h1 className='font-semibold text-gray-400'>Note</h1>
                                                                    <div>
                                                                        <h1> - <span className='font-semibold text-gray-400'>[cname]</span>  code dari Nama Customer</h1>
                                                                        <h1> - <span className='font-semibold text-gray-400'>[cphone]</span> code dari Phone Customer</h1>
                                                                        <h1> - <span className='font-semibold text-gray-400'>[cproduct]</span> code dari  Product Customer</h1>
                                                                        <h1> - <span className='font-semibold text-gray-400'>[caddress]</span> code dari Address Customer</h1>
                                                                    </div>
                                                                </div>
                                                                <div className='mt-10 flex flex-row justify-end'>
                                                                    <button className=' bg-gray-300 py-2 px-3 rounded-xl text-white font-semibold' onClick={() => setShowNew(false)}>Cancel</button>
                                                                    <button className=' bg-green-300 py-2 px-3 rounded-xl text-white font-semibold ml-2'>Save</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </>
    )
}

export default Template