import React from 'react'
import Link from 'next/link'
import classes from './MainHeader.module.css'

function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href="/">NexT Events</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                            <Link href="/allevents">AllEvents</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader;
