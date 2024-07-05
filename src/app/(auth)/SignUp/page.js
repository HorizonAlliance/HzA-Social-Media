import React from 'react';
import Link from 'next/link';

function Page() {
    return (
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3e6_100%)]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">Create Account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-full border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-full bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Log In</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-300">
                        By Signing up, you agree to the <span className='text-green-500'>Terms of Service</span><br />
                        and <span className='text-green-500'>Privacy Policy</span>, including <span className='text-green-500'>Cookie Use</span>
                    </p>
                    <p className="mt-10 text-center text-sm text-gray-300">
                        Have an already account?
                        <Link href="/SignIn" className="font-semibold leading-6 text-green-500 hover:text-green-700 ml-2">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page; 
