import { Routes, Router, BrowserRouter, Route, Navigate } from 'react-router'
import Index from './pages/Index.jsx'
import WriteRev from './pages/WriteRev.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import Review from './pages/Review.jsx'
import Contact from './pages/Contact.jsx'
import Pricing from './pages/Pricing.jsx'
import { useUser } from './contexts/users/userContext.jsx'
import { useEffect } from 'react'
import RevProvider from './contexts/reviews/UseRev.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {
  const {user} = useUser();
  // const [reviews, setReviews] = useState([]);
  // const [responses,setResponses] = useState([]);
  // // Funtionality of Review context
  // const addRev = (rev)=>{
  //   setReviews((prevRev)=> [{id:uuid,...rev},...prevRev])
  // }
  // const updateRev = (id,rev)=>{
  //   setReviews((preRev) => preRev.map((item)=> item.id === id ? rev : item))
  // }
  // const deleteRev = (id) =>{
  //   setReviews((preRev) => preRev.filter((item) => item.id !== id ))
  // }
  // const addResponse = (response) =>{
  //   setResponses((preRes)=> [{id:uuid,...response},...preRes])
  // }
// useEffect(()=>{

// },[user]);
  return (
    <BrowserRouter>
     <RevProvider>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/writerev' element={<WriteRev />} />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/forget-password'
            element={<ForgetPassword />}
          />
          <Route
            path='/review'
            element={<Review />}
          />
          <Route

            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/pricing'
            element={<Pricing />}
          />
          <Route 
            path='/dashboard'
            element = {<Dashboard />}
          />
        </Routes>
        </RevProvider>
    </BrowserRouter>
  )
}

export default App
