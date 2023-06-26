import React from 'react'
import WithCounter from './WithCounter'
const HoverCounter = (props) => {

    return (
        <div>
            <button onMouseOver={() => props.increment()}>hover button</button>
            <p>{props.name}- {props.counter}</p>
        </div>
    )
}

export default WithCounter(HoverCounter, 10)