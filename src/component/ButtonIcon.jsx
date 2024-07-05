'use client'

import Image from 'next/image'
import React from 'react'


function ButtonIcon({ provider, iconSrc, altText, children, ...props }) {
    return (
        <>
            <button className="flex w-full items-center justify-center bg-white border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" {...props}>
                <div className="flex items-center">
                    <Image src={iconSrc} alt={altText} width={25} height={25} className="mr-2" />
                    <span className="flex-grow text-center">{children}</span>
                </div>
            </button>
        </>
    )
}

export default ButtonIcon