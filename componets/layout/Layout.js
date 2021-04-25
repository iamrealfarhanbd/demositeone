import React from 'react'
import MainHeader from './Main-header'
function Layout(props) {
    return (
        <>
        <MainHeader />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout
