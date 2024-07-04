import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './HomePage/Navbar'
import Footer from './HomePage/Footer'

function App() {


  return (
    <div>
      <div className='bg-[#052949]'>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      

      <div className='bg-[#052949]'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
