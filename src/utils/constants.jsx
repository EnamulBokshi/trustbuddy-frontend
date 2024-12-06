import {FaPlaneDeparture,FaFaceSmile} from 'react-icons/fa6'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {BsBank2} from 'react-icons/bs'
import { GiTemptation } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
export const reviews = [
{
    id: 12132,
    stars:['full','full','full','full','half'],
    text: 'Actual Review goes here...',
    user:{
        userId:1213,
        userName:"Enamul",
        avatar:<FaFaceSmile/>
    },
    isVerified:true,
}
]

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
    }
]
export default category;