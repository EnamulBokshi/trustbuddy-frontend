import { useContext,useState,createContext} from "react";

export const DashboardContex = createContext();

export const useDashoboard = ()=>{
    return useContext(DashboardContex)
}

export default function DashboardProvider({children}){
    const [activeSection,setActiveSection] = useState('home');
    return (
        <DashboardContex.Provider value={{activeSection,setActiveSection}}>
            {children}
        </DashboardContex.Provider>
    )
}