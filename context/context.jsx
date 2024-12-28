import { createContext } from "react";
import { Stylist } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value={
        Stylist

    }
    return(
        <AppContext.Provider value={value}>
        {props.children}

        </AppContext.Provider>
       
    )
}
export default AppContextProvider