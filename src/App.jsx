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
import Dashboard from './pages/Dashboard.jsx';
import NotificationProvider from './contexts/notification/NotificationContext.jsx'
import DashboardProvider from './contexts/dashboard/DashboardContext.jsx'
import UserProfile from './pages/UserProfile.jsx'
import CategoryView from './pages/CategoryView.jsx'
import CategoryProvider from './contexts/catrgory/CategoryContext.jsx'
function App() {
  return (
    <BrowserRouter>
     <RevProvider>
      <NotificationProvider>
        <CategoryProvider>
        <DashboardProvider >
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
          <Route 
            path='/user-details/:userID' 
            element = {<UserProfile />}
          />
          <Route 
            path='/review/:category' 
            element = {<CategoryView/>}
          />
        </Routes>
        </DashboardProvider>
        </CategoryProvider>
        </NotificationProvider>
        </RevProvider>
    </BrowserRouter>
  )
}

export default App
