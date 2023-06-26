import React, { useState } from 'react'

const WithCounter = (OriginalComponent, size) => {

    const NewComponents = (props) => {
        const [counter, setCounter] = useState(0)
        return <OriginalComponent counter={counter} increment={() => setCounter((count) => count + size)} name="Masudur Rahman" />
    }

    return NewComponents;
}

export default WithCounter