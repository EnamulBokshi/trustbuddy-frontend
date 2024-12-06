import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

export const useUser = ()=>{
    return useContext(UserContext)
}
export default function UserProvider  ({children}){
    const [user,setUser] = useState([]);
    const [ c_user,setC_user] = useState([]);
    const[isLoggedIn,setIsLoggedIn] = useState(false)
        return(
            <UserContext.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn,c_user,setC_user}}>
                {children}
            </UserContext.Provider>
        )
}