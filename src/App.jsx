import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './login/login'
import SignUp from './signup/signup'
import NavBar from './navbar/NavBar'
import HomePage from './home/HomePage'
import ContactUs from './contactus/ContactUs'
import Payment from './pay/PaymentPage'
function App() {
 
  return (
    <div className="app">
       <BrowserRouter>
       <NavBar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/sign' element={<SignUp/>} />
    <Route path='/contact' element={<ContactUs/>} />
    <Route path='/pay' element={<Payment/>}/>

   </Routes>
  
   </BrowserRouter>

    </div>
  
  )
}

export default App
