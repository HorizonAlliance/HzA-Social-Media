'use client'

import Link from 'next/link'
import React from 'react'

function Links({ linkUrl, children }) {
    return (
        <>
            <Link href={linkUrl}>{children}</Link>
        </>
    )
}

export default Links