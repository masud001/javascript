import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
const Counter = () => {

    const { incrementCount, decrementCount, count } = useContext(AppContext)

    return (
        <div>


            <div className="">
                <p>counter  <span>{count}</span> </p>
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
            </div>


        </div>
    )
}

export default Counter