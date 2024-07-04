import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './HomePage/Navbar'

function App() {


  return (
    <div>
      <div className='bg-[#052949]'>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      <div>
        
      </div>
    </div>
  )
}

export default App
