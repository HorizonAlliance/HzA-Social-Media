import React from 'react';
import ButtonIcon from '@/component/ButtonIcon';

function Page() {
    return (
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3e6_100%)]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Join Horizon</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <div className="mt-4 mx-auto">
                        <ButtonIcon provider="Google" iconSrc="./google.svg" altText="Google" > Sign Up With Google</ButtonIcon>
                    </div>

                    <div className="mt-4 mx-auto ">
                        <ButtonIcon provider="Apple" iconSrc="./Apple.svg" altText="Apple" > Sign Up With Apple</ButtonIcon>
                    </div>
                    <div className='mt-4'>
                        <hr></hr>
                    </div>
                    <div className='mt-4 mx-auto'>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create account</button>
                    </div>
                    <p className="mt-10 text-center text-sm text-white">
                        Have an already account?
                        <a href='/SignIn' className="font-semibold leading-6 text-green-500 hover:text-green-700"> Log In</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page; 
