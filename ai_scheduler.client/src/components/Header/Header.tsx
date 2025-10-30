import React from "react"

import header from "./Header.module.css"

type PropsType = {
    signOut: boolean,
    setSignOut: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({signOut, setSignOut}: PropsType) => {

    const button = signOut ? <button className = {header.button} onClick = {() => setSignOut(false)}>Sign out</button> :
    <button className = {header.button} onClick = {() => setSignOut(true)}>Sign in</button>
    const content = (
        <div className = {header.header}>
            <h1>AI Scheduler</h1>
            {button}
        </div>
    )

    return content;
}

export default Header