import {useContext , createContext, useState, useEffect} from "react"

export const AppContext= createContext({})

export const AppProvider = ({children})=>{

const [loginButton, setLoginButton] = useState(false)
const [isCreatePopUp, setIsCreatePopUp] = useState(false)
const [creation, setCreation] = useState("post")


return (<AppContext.Provider
        value={{loginButton ,
        setLoginButton, 
        isCreatePopUp , 
        setIsCreatePopUp,
        creation,
        setCreation
        } }>
            {children}
        </AppContext.Provider>)

}