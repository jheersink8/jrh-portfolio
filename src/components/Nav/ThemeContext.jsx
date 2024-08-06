import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const SoundContext = createContext();

// Context for Dark Mode
export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
};

// Context for Sound Mode
export const SoundProvider = ({ children }) => {
    const [soundMode, setSoundMode] = useState(true);
    return (
        <SoundContext.Provider value={{ soundMode, setSoundMode }}>
            {children}
        </SoundContext.Provider>
    )
};