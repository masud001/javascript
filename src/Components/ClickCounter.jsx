import React, { useContext } from 'react'
import WithCounter from './WithCounter'
import ThemeContext from '../context/ThemeContext';

const ClickCounter = (props) => {
    const { theme, themeToggle } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={themeToggle}>{theme === 'light' ? "toggle dark theme" : "toggle light theme"}</button>
            <button onClick={() => props.increment()}>click button </button>
            <p>{props.name} {props.counter}</p>
        </div>
    )
}

export default WithCounter(ClickCounter, 2);