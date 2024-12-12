import React, { useContext, useId, useState,useEffect} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Navigate,useNavigate } from 'react-router';
import Input from '../components/Forms/Input';
import { Star } from 'lucide-react';
import {useRev} from '../contexts/reviews/UseRev';
import { useUser } from '../contexts/users/userContext';
import { useNotif } from '../contexts/notification/NotificationContext';
function WriteRev() {
  const {c_user} = useUser();
  const navigate = useNavigate();
  const {count,setCount} = useNotif();
  if(!c_user) {
    navigate('/login');
  }
  const {reviews,setReviews,responses,setResponses} = useRev();
  const ID = useId();
  // Review Form data collection
  const [title,setTitle] = useState('');
  const [id,setId] = useState('')
  const [category,setCategory] = useState('')
  const [productLink ,setProductLink] = useState('')
  const [description,setDescription] = useState('');
  const [totalStar,setTotalStar] = useState(1);
  const[msg,setMsg] = useState('');
  const [localReviews,setLocalReviews] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    setReviews((reviews) => [...reviews,{revId:ID,productID:id,title,category,productLink,description,totalStar,user:c_user,response:{}}]);
    setMsg('Submitted the review');
    setLocalReviews(()=>[...localReviews,{revId:ID,productID:id,title,category,productLink,description,totalStar,user:c_user,response:{}}])
    localStorage.setItem("reviews",JSON.stringify(reviews));
    setCount((prev)=>prev+1)
  }
  console.log(...reviews)
  const startFill = 'rounded-sm bg-violet-500 text-gray-200'
  useEffect(()=>{
    localStorage.setItem('reviews',JSON.stringify(reviews));
},[reviews])
  return (
<>
    <Nav active={'writerev'}/>
      <section className='bg-gray-300 py-10 px-5'>
          <div className='py-20'>
              <h1 className='font-extrabold font-serif sm:text-4xl text-2xl text-center'>Write a Review</h1>
              <h2 className='text-xl text-center font-serif
              font-semibold
              font text-gray-600'>Be honest, Be helpful, Be Kind</h2>
          </div>
          <div className='p-10 rounded-lg  bg-gray-200 container mx-auto'>
            <div>
              <form onSubmit={handleSubmit} >
                <div className=' grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2'>
                  <Input value={title} onChange={(e)=>setTitle(e.target.value)} title={"PRODUCT TITLE"} pholder={"product title"} type={'text'}/>
                  <Input value = {id} onChange={(e)=>setId(e.target.value)} title={"PRODUCT ID"} pholder={"ID"} type={'text'}/>
                                    
                  <Input value={category} onChange={(e)=>setCategory(e.target.value)} title={"SELECT CATEGORY"} pholder={"product title"} type='select'  option={['Electonics','Airplane','Travel','Agency','Gadgests','Companies','Banks','Books','Cosmetics']}/>
                  <Input value={productLink} onChange={(e)=>setProductLink(e.target.value)} title={"PRODUCT LINK"} pholder={"link"} type={'text'} isReq={false}/>
                  
                  <Input  value={description} onChange={(e)=>setDescription(e.target.value)} title={"DESCRIPTION"} pholder={"description"} type='textarea'/>
                  <div className='py-2'>
                    <label className='text-gray-500 py-0 my-0 font-bold  hover:text-gray-700'>Rating: {totalStar}.0</label>
                    <div className='flex gap-2 py-1'>
                    <Star  className=' rounded-sm bg-violet-500 text-gray-200' onClick={()=>setTotalStar(1)}/>
                    <Star  className={totalStar>=2? `${startFill}`:`hover:text-red-400`} onClick={()=>setTotalStar(2)}/>
                    <Star  className={totalStar>=3? `${startFill}`:`hover:text-red-400`} onClick={()=>setTotalStar(3)}/>
                    <Star  className={totalStar>=4? `${startFill}`:`hover:text-red-400`} onClick={()=>setTotalStar(4)}/>
                    <Star  className={totalStar>=5? `${startFill}`:`hover:text-red-400`} onClick={()=>setTotalStar(5)}/>
                </div>
                  </div>
                </div>
                
                <div className='flex justify-center py-5'>
                  <button type='submit' className='rounded-lg px-10 py-3 bg-violet-800  text-white'>
                    Submit
                  </button>
                </div>

                  <div>
                    {
                      msg && <p>
                        {
                          msg
                        }
                      </p>
                    }
                  </div>
              </form> 
            </div>

          </div>
      </section>
    <Footer />
</>
  )
}

export default WriteRev