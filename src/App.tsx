import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './home';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
