import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const themeToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }
    const value = { theme, themeToggle }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider