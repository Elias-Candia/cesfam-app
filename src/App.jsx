import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeMedico from './pages/HomeMedico'

function App() {
  return (
    <>
      <Routes>
        <Route path="/home-medic" element={<HomeMedico/>} />
      </Routes>
    </>
  )
}

export default App
