import React from 'react'
import WithCounter from './WithCounter'
const ClickCounter = (props) => {
    return (
        <div>
            <button onClick={() => props.increment()}>click button </button>
            <p>{props.name} {props.counter}</p>
        </div>
    )
}

export default WithCounter(ClickCounter, 2);