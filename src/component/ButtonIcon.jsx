'use client'

import Image from 'next/image'
import React from 'react'


function ButtonIcon({ provider, iconSrc, altText, children, ...props }) {
    return (
        <>
            <button
                class="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" {...props}>
                <Image src={iconSrc} alt={altText} width={25} height={25} />
                <span>{children}</span>
            </button>
        </>
    )
}

export default ButtonIcon