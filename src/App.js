import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return <div className='App'>
    <Router>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
}

export default App;
