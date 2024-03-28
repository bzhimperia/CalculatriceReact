import {createContext, useContext} from "react";
import useCalcReducer from "../reducer/calcReducer.jsx";

const calcContext = createContext()

export const useCalcContext = () => useContext(calcContext)

const CalcContextProvider = ({children}) => {

    const value = useCalcReducer()

    return <calcContext.Provider value={value}>
        {children}
    </calcContext.Provider>
}

export default CalcContextProvider