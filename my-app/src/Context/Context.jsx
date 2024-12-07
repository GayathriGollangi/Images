import { createContext, useContext, useEffect, useState } from "react";


export const AppContext = createContext();

const getInitialMode = ()=>{
    const preferMode = window.matchMedia('(prefers-color-scheme)').matches;
    const storedMode =localStorage.getItem('darkMode');
    if(storedMode === null){
        return preferMode
    }
    return storedMode === true;
}

export const AppProvider = ({children})=>{
     
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode());
    const [searchTerm ,setSearchTerm] = useState("cat");

    const toggleDarkTheme = ()=>{
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem("darkMode",isDarkTheme);
    }
    useEffect(()=>{
        document.body.classList.toggle("dark-theme",isDarkTheme);

    },[isDarkTheme])
    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = ()=>{
    return useContext(AppContext);
}