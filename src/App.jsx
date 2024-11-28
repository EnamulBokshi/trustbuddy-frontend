import {Routes,Router, BrowserRouter,Route,Navigate} from 'react-router'
import Index from './pages/Index.jsx'
import WriteRev from './pages/WriteRev.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
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
      </Routes>
      </BrowserRouter>
  )
}

export default App
