import {Routes,Router, BrowserRouter,Route,Navigate} from 'react-router'
import Index from './pages/Index.jsx'
import WriteRev from './pages/WriteRev.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import Review from './pages/Review.jsx'
import Contact from './pages/Contact.jsx'
import Pricing from './pages/Pricing.jsx'

function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element = {<Index/>}/>
      <Route path='/writerev' element = {<WriteRev/>}/>
      <Route
      path='/login' 
      element = {<Login />}
      />
      
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    <Route 
      path='/register'
      element = {<Register />}
    />
    <Route 
    path='/forget-password'
    element = {<ForgetPassword/>}
    />
    <Route 
    path='/review'
    element = {<Review/>}
    />
    <Route 

    path='/contact'
    element = {<Contact />}
    />
    <Route 
    path='/pricing'
    element = {<Pricing/>}
    />
      </Routes>
      </BrowserRouter>
  )
}

export default App
