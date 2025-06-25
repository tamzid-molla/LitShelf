import { createContext, useEffect, useState } from "react";

// Create a context to manage theme (light/dark) 
export const ThemContext = createContext('light');

export const ThemeContext = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme')=== 'dark'
    );
    useEffect(() => {
        // Toggle the 'dark' class on the document based on darkMode state
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark')
        }
        else {
            //Remove the class
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light')
        }
    },[darkMode])
    return (
        <ThemContext value={{darkMode,setDarkMode}}>
            {children}
        </ThemContext>
    );
};
