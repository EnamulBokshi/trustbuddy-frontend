import { useContext,createContext,useState } from "react";
export const NotificationContext = createContext();
export const useNotif = ()=>{
    return useContext(NotificationContext)
}
export default function NotificationProvider({children}){
    const [count,setCount] = useState(0);
    const [notif,setNotif] = useState('')
    return (
        <NotificationContext.Provider value={{count,setCount}}>
            {children}
        </NotificationContext.Provider>
    )
}