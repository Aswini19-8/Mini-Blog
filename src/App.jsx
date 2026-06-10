import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Detail from './Components/Details'
import Navigation from './Components/Navigation'
import NotFound from './Components/NotFound'
import {Route,Routes} from 'react-router-dom'
import Details from './Components/Details'
import { useLocation } from "react-router-dom";
function App() {
   const [count, setCount] = useState(0)
const location=useLocation();

const showNav=location.pathname==="/home"||
location.pathname==="/about"||location.pathname.startsWith("/detail/")

  return (
   
    <>
    
   {showNav && <Navigation/>} 
    <Routes>
<Route path='/home' element={<Home/>}>  </Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/detail/:name' element={<Detail/>}></Route>
<Route path='*' element={<NotFound/>}></Route>



    </Routes>
    
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
