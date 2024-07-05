import React from 'react';
import ButtonIcon from '@/component/ButtonIcon';
import Link from 'next/link';

function Page() {
    return (
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3e6_100%)]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">Join Horizon</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <div className="mt-4 mx-auto">
                        <ButtonIcon provider="Google" iconSrc="./google.svg" altText="Google" > Sign Up With Google</ButtonIcon>
                    </div>

                    <div className="mt-4 mx-auto ">
                        <ButtonIcon provider="Apple" iconSrc="./Apple.svg" altText="Apple" > Sign Up With Apple</ButtonIcon>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500">
                        <hr className="flex-grow bg-gray-500" />
                        <span className="px-2">Or</span>
                        <hr className="flex-grow bg-gray-500" />
                    </div>
                    <div className='mt-4 mx-auto'>
                        <Link href="/SignUp">
                            <button type="button" className="flex w-full justify-center rounded-full bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Create account</button>
                        </Link>
                    </div>
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
