import { useContext,createContext,useState } from "react";
export const NotificationContext = createContext();

export default function NotificationProvider({children}){
    
    return (
        <NotificationContext.Provider>
            {children}
        </NotificationContext.Provider>
    )
}