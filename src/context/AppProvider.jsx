import React, { useState } from 'react'
import AppContext from './AppContext'
const AppProvider = ({ children }) => {
    const [count, setCount] = useState(10);

    const incrementCount = () => {
        setCount((count) => count + 1);
    };

    const decrementCount = () => {
        setCount((count) => count - 1);
    };
    return (
        <AppContext.Provider value={{ incrementCount, decrementCount, count }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;