import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sorvetes from './pages/Sorvetes'
import Login from './pages/Login'
import Error from './pages/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sorvetes from './pages/Sorvetes'
import Login from './pages/Login'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className="bg-[#E5D5C3] min-h-screen flex flex-col justify-between pt-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorvetes" element={<Sorvetes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App