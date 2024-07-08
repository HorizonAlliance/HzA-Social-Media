import React from 'react'

function page() {
    return (
        <div className='grid grid-cols-2  w-screen h-screen'>

            <div className='flex bg-white items-center justify-center'>
                ok
            </div>
            <div className="flex justify-center text-w inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(110%_110%_at_50%_1%,#3e6_10%,#000_100%)] ">
                <div className='grid grid-flow-row text-white justify-center'>
                    <h1 className='text-4xl font-bold'>Not Registered Yet?</h1>
                    <p>Create your account for free</p>
                    <button type='button'>Register Now !</button>
                </div>
            </div>
        </div>
    )
}

export default page