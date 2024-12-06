import { ThumbsUp,Smile,BadgeCheck} from "lucide-react";
import React, { Children, createContext, useContext, useEffect, useState } from "react";
// const RevContext = React.createContext(
//    {
//     reviews:[
//         {
//             revID : 1213434,
//             stars: ['full','full','full','full','half'],
//             review: `Hello there this is a honest review..`,
//             avg: <Smile />,
//             badge: <BadgeCheck />,
//             time: "1 Day ago",
//             user: "Bob Ross",
//         }
//     ],
//     responses:[
//         {
//             id: 1,
//             revID: 1213434,
//             text:'Thanks for review! stay tuned',
//             react: <ThumbsUp />
//         }
//     ],
//     addRev : (rev)=>{},
//     addResponse: (response) =>{},
//     updateRev:(id,rev) =>{},
//     deleteRev: (id)=>{}
//    }
// )


const RevContext = createContext();
export const useRev = ()=>{
    return useContext(RevContext);
}

const RevProvider = ({children}) =>{

    const [reviews,setReviews] = useState([]);
    const [responses,setResponses] = useState([]);
    
    return (
        <RevContext.Provider value={{reviews,responses,setResponses,setReviews}}>
            {children}
        </RevContext.Provider>
    )
};
export default RevProvider;

