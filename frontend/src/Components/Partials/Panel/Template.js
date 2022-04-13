import React, {useState} from 'react'
import Input from '../Input/Input';

function Template() {

    const [showTemplate, setShowTemplate] = useState(false);

    return (
        <>
            <div className='px-2'>
                <button className='border border-gray-400 hover:border-gray-600 p-2 rounded-full' type="button" onClick={() => setShowTemplate(true)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                </button>
            </div>
            {showTemplate ? (
                <>
                    <div className="fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative h-screen w-2/6 border">
                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <button className="p-1 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowTemplate(false)}>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                    </button>
                                    <h3 className="text-xl font-semibold">
                                        Template
                                    </h3>
                                    <div/>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form className='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8' action='#'>
                                        <div>
                                            <Input type={'text'} placeholder={'Token'} title={'Token'} icon={<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'></path>} />
                                        </div>
                                        <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
                                        <div className='text-sm font-medium text-gray-500 dark:text-gray-300 text-center'>
                                            Didn't Have Token? <a href='https://banyumax.id/' target='_blank' className='text-blue-700 hover:underline dark:text-blue-500'>Get Here!</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Template