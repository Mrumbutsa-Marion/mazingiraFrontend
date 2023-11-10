import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar';
import Home from './Components/Home';
import Donate from './Components/Donate';
import Organizations from './Components/Organizations';
import About from './Components/About.jsx';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Registration from './Components/Registration.jsx';
import Payment from './Components/Payment';
import Beneficiary from './Components/Beneficiary.jsx';
import Inventory from './Components/Inventory';
import Donation from './Components/Donation';



function App() {
  

  return (
    <>
     <BrowserRouter>
      <div className='landing'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/donation" element={<Donation />} />



        </Routes>
      </div>
      
    </BrowserRouter>
    
    </>
  )
}

export default App;
