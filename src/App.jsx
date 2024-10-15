import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<Watchhistory/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
