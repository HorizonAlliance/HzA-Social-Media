import ButtonIcon from '@/component/ButtonIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function page() {
    return (
        <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="mx-auto my-auto w-full h-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                <div className="grid items-center justify-items-center gap-2 sm:gap-2 lg:grid-cols-2">

                    <div className="relative flex">
                        <Image
                            src="/Horizon.png"
                            alt="Logo RC"
                            layout="responsive"
                            width={300}
                            height={300}
                            className="max-w-sm h-auto rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="mt-10 sm:mx-auto sm:w-sm sm:max-w-sm">
                            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                                Happening now!
                            </h1>
                            <p className="mb-5 max-w-lg text-lg font-bold text-gray-300 sm:text-xl md:mb-10 lg:mb-12">
                                Join Today
                            </p>
                            <div className="mb-4 max-w-lg mx-auto">
                                <ButtonIcon provider="Google" iconSrc="./google.svg" altText="Google" > Sign Up With Google</ButtonIcon>
                            </div>

                            <div className="mb-2 max-w-lg mx-auto ">
                                <ButtonIcon provider="Apple" iconSrc="./Apple.svg" altText="Apple" > Sign Up With Apple</ButtonIcon>
                            </div>
                            <div className="mt-2 ml-2 mr-2  max-w-sm flex items-center text-gray-500">
                                <hr className="flex-grow bg-gray-500" />
                                <span className="px-1">Or</span>
                                <hr className="flex-grow bg-gray-500" />
                            </div>
                            <div className='mt-2 mac-w-lg mx-auto'>
                                <Link href="/SignUp">
                                    <button type="button" className="flex w-full justify-center rounded-full bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Create account</button>
                                </Link>
                            </div>
                            <p className="mt-4 text-left ml-2 text-xs text-gray-300">
                                By Signing up, you agree to the <span className='text-green-500'>Terms of Service</span><br />
                                and <span className='text-green-500'>Privacy Policy</span>, including <span className='text-green-500'>Cookie Use</span>
                            </p>
                            <p className="mb-2 max-w-lg text-sm font-bold text-gray-300 sm:text-xl md:mt-10 lg:mt-12">
                                Already have an account?
                            </p>
                            <div className='mt-2 mac-w-lg mx-auto'>
                                <Link href="/SignIn">
                                    <button type="button" className="flex w-full justify-center rounded-full bg-transparent border-2 border-green-500  px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">SIgn In</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default page;
