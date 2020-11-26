import React from 'react'

//different  pages will show their own hero image
export default function Hero({children,hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
