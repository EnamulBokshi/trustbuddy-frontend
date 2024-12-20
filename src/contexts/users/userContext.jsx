import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

export const useUser = ()=>{
    return useContext(UserContext)
}
export default function UserProvider  ({children}){
    const predefineUsers = [
        {id:1,name:'EnamulHaque',username:'admin',email:'info.enamul1946@yahoo.com',phone:'01904929583',password:'admin',age:25,gender:'Male',address:'Mirpur-2',image:'https://cdn.pixabay.com/photo/2015/08/31/10/07/man-915230_960_720.jpg'}
    ]

    const usernames = ['admin']
    const [user,setUser] = useState(predefineUsers);
    const [ c_user,setC_user] = useState([]);
    const [takenUsername,setTakenUsername] = useState(usernames);
    const[isLoggedIn,setIsLoggedIn] = useState(false);

    const updateUser = (id,updateUser)=>{
        setUser(user.map(u=>{
            if(u.id == id){
                return updateUser
            }
            return u
        }))
    }
    const findUser = (id)=>{
        const searchedUser = user.filter(u =>{
            if (u.id == id) {
                return u
            }
        })
        return searchedUser;
    }
        return(
            <UserContext.Provider value={{updateUser,user,setUser,isLoggedIn,takenUsername,setTakenUsername,setIsLoggedIn,c_user,setC_user,findUser}}>
                {children}
            </UserContext.Provider>
        )
}