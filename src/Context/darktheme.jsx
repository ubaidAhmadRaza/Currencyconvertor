import { createContext,useContext, Provider } from "react";
export const themeswithcer=createContext({
    thememode:'light' ,
    lighttheme: ()=>{

    },
    darktheme: ()=>{
        
    }
})
export const ThemeProvider=themeswithcer.Provider;
export const usethemeswither= function(){
    return useContext(themeswithcer)
}
