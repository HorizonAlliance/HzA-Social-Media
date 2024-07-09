import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='grid grid-cols-2  w-screen h-screen'>
            <div className="flex justify-center text-w inset-0-z-10 h-full w-full items-center [background:radial-gradient(110%_110%_at_50%_1%,#0a3088_10%,#6ad3fe_100%)]">
                <div className="grid grid-flow-row p-4 text-white justify-center">
                    <h1 className="text-4xl font-bold">Allrady Registered?</h1>
                    <p className="text-center">Login now to your account</p>
                    <Link href="/SignIn">
                        <button type="button" className="flex w-full justify-center rounded-full bg-transparent hover:bg-white hover:text-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                            Login Now!
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex bg-custom-image items-center justify-center'>
                <div className="flex min-h-full flex-col justify-center px-6 py-9 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-black ">Sign Up to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">Username</label>
                                <div className="mt-">
                                    <input
                                        id="username"
                                        name="username"
                                        type="username"
                                        required
                                        className="block w-full rounded-full border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black    ">Email</label>
                                <div className="mt-">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-full border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black   ">Password</label>
                                <div className="mt-">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-full border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-black   ">Confirm Password</label>
                                <div className="mt-">
                                    <input
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        required
                                        className="block w-full rounded-full border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-full bg-blue-400 px-3 py-1.5 text-sm  leading-6 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 font-bold text-white">Register</button>
                            </div>
                        </form>
                        <div className='flex justify-between p-2 space-x-3mt-'>
                            <div className='flex justify-center gap-1 items-center'>
                                <input type='checkbox' id='remember' />
                                <label className='text-sm'>Remember me</label>
                            </div>
                            <div className='flex  items-center'>
                                <a href=''>
                                    <p className='text-sm text-blue-500'>Forgot Password</p>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-gray-500">
                            <hr className="flex-grow bg-gray-500" />
                            <span className="px-2">Or</span>
                            <hr className="flex-grow bg-gray-500" />
                        </div>
                        <div>
                            <a href=''>
                                <button className="flex w-full items-center justify-center bg-white border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <div className="flex items-center">
                                        <Image src="./google.svg" alt="google" width={25} height={25} className="mr-2" />
                                        <span className="text-center flex-1">Sign Up With Google</span>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page