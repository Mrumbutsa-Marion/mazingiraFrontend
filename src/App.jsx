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

        </Routes>
      </div>
      
    </BrowserRouter>
     {/* <BrowserRouter>
     <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/Organization" element={<Organization />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="About" element={<About/>}/>

      </Routes>
     </div>
      </BrowserRouter> */}
    </>
  )
}

export default App;
