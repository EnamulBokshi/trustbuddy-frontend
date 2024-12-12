import { useContext,createContext,useState} from "react";
import {FaPlaneDeparture,FaFaceSmile} from 'react-icons/fa6'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {BsBank2} from 'react-icons/bs'
import { GiTemptation } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { FcElectronics } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { DiProlog } from "react-icons/di";
import { FiTv } from "react-icons/fi";
import { IoMdPaper } from "react-icons/io";
export const CategoryContext = createContext();
export const useCategory = ()=>{
    return useContext(CategoryContext)
}

const CategoryProvider = ({children})=>{
    const category = [
        {
            id: 1,
            name:'Travels',
            icon: <FaPlaneDeparture/>
        },
    
        {
            id: 2,
            name:'Insurance',
            icon: <FaMoneyCheckAlt/>
        }
        ,
        {
            id: 3,
            name:'Bank',
            icon: <BsBank2/>
        },
    
        {
            id: 4,
            name:'Product',
            icon: <GiTemptation/>
        },
        
        {
            id: 5,
            name:'Restaurants',
            icon: <MdFastfood/>
        },
        
        {
            id: 6,
            name:'Electronics',
            icon: <FcElectronics/>
        },
        {
            id: 7,
            name:'Books',
            icon: <IoBookSharp/>
        },
        {
            id: 8,
            name:'Cosmetics',
            icon: <DiProlog/>
        },
        {
            id: 9,
            name:'Tv Show-Movie',
            icon: <FiTv/>
        },
        {
            id: 10,
            name:'Journal-papers',
            icon: <IoMdPaper/>
        }
    ]
    const [categories,setCategory] = useState(category);
    const addCategory = (category)=>{
        setCategory((prev)=> [...prev,category])
    }
    return(
        <CategoryContext.Provider value={{categories,setCategory,addCategory}}>
            {children}
        </CategoryContext.Provider>

    );
}

export default CategoryProvider;