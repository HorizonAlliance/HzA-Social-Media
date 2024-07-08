import React from 'react';
import Link from 'next/link';
import ButtonIcon from '@/component/ButtonIcon';

function Page() {
    return (
        <div className="absolute inset-0-z-10 h-screen w-screen items-center px-5 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3e6_100%)]">
            <div className="flex min-h-full flex-col justify-center px-6 py-9 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="mt-4 flex items-center text-gray-500">
                        <hr className="flex-grow bg-gray-500" />
                        <span className="px-2">Or</span>
                        <hr className="flex-grow bg-gray-500" />
                    </div>
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            {/* bingung bagian email or phone, cara agar ubah type input email atau number */}
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email or Phone Number</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-full border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-full bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Next</button>
                        </div>
                    </form>
                    <div className='mt-4 mx-auto'>
                        <Link href="/SignUp">
                            <button type="button" className="flex w-full justify-center rounded-full bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm border-2 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Create account</button>
                        </Link>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-300">
                        Don`t have an account?
                        <Link href="/SignUp" className="font-semibold leading-6 text-green-500 hover:text-green-700 ml-2">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page; 
