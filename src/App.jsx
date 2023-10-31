import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar';
import Home from './Home'; // Import the Home component
import Donate from './Donate';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>
     </div>
      </BrowserRouter>
    </>
  )
}

export default App;
