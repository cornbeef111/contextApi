import React from "react";

export const themeContext = React.createContext({
    themeMode: 'Light',
    darkMode:()=>{},
    lightMode:()=>{},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme(){
    return React.useContext(themeContext)
}
